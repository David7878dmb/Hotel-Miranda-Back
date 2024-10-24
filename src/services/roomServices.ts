import { Pool, RowDataPacket } from 'mysql2/promise';
import { Room } from '../interfaces/roomInterfaces';

export class RoomService {
  private db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  async getAllRooms(): Promise<RowDataPacket[]> {
    const [rows]: [RowDataPacket[], any] = await this.db.query<RowDataPacket[]>('SELECT * FROM rooms');
    return rows;
  }

  async getRoomById(id: number): Promise<RowDataPacket | null> {
    const [rows]: [RowDataPacket[], any] = await this.db.query('SELECT * FROM rooms WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null;
  }

  async createRoom(roomData: {
    type: string,
    number: string,
    picture?: string,
    bedType?: string,
    floor: number,
    facilities?: string,
    rate: number,
    status: 'AVAILABLE' | 'OCCUPIED'
  }) {
    const query = `
      INSERT INTO rooms (type, number, picture, bedType, floor, facilities, rate, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const values = [
      roomData.type,
      roomData.number,
      roomData.picture || null,
      roomData.bedType || null,
      roomData.floor,
      roomData.facilities || null,
      roomData.rate,
      roomData.status
    ];

    await this.db.execute(query, values);
  }

  async updateRoom(id: number, updatedData: Partial<{
    type: string,
    number: string,
    picture?: string,
    bedType?: string,
    floor: number,
    facilities?: string,
    rate: number,
    status: 'AVAILABLE' | 'OCCUPIED'
  }>) {
    const fields = Object.keys(updatedData).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(updatedData), id];

    const query = `UPDATE rooms SET ${fields} WHERE id = ?`;
    await this.db.execute(query, values);
  }

  async deleteRoom(id: number) {
    await this.db.execute('DELETE FROM rooms WHERE id = ?', [id]);
  }
}
