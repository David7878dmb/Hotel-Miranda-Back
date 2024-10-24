import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

export class BookingService {
  private db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  async getAll(): Promise<RowDataPacket[]> {
    const [rows]: [RowDataPacket[], any] = await this.db.query('SELECT * FROM bookings');
    return rows;
  }

  async getByID(id: string): Promise<RowDataPacket | null> {
    const [rows]: [RowDataPacket[], any] = await this.db.query('SELECT * FROM bookings WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null;
  }

  async create(bookingData: {
    guest: string;
    picture: string;
    orderDate: string;
    checkIn: string;
    checkOut: string;
    discount: number;
    notes: string[];
    roomId: number;
    status: 'Pending' | 'Booked' | 'Cancelled' | 'Refund';
  }) {
    const query = `
      INSERT INTO bookings (guest, picture, order_date, check_in, check_out, discount, notes, room_id, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      bookingData.guest,
      bookingData.picture,
      bookingData.orderDate,
      bookingData.checkIn,
      bookingData.checkOut,
      bookingData.discount,
      JSON.stringify(bookingData.notes),
      bookingData.roomId,
      bookingData.status
    ];

    await this.db.execute(query, values);
  }

  async update(id: string, updatedData: Partial<{
    guest: string;
    picture: string;
    orderDate: string;
    checkIn: string;
    checkOut: string;
    discount: number;
    notes: string[];
    roomId: number;
    status: 'Pending' | 'Booked' | 'Cancelled' | 'Refund';
}>): Promise<boolean> {
    const fields = Object.keys(updatedData).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(updatedData), id];

    const query = `UPDATE bookings SET ${fields} WHERE id = ?`;
    const [result] = await this.db.execute<ResultSetHeader>(query, values);
    
    // Devuelve true si se actualizaron filas, de lo contrario false
    return result.affectedRows > 0;
}

  async remove(id: string): Promise<boolean> {
    const [result] = await this.db.execute<ResultSetHeader>('DELETE FROM bookings WHERE id = ?', [id]);
    
    // Devuelve true si se eliminaron filas, de lo contrario false
    return result.affectedRows > 0;
}}