import { Pool, RowDataPacket } from 'mysql2/promise';
import 'mysql2';

export class UserService {
  private db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  async createUser(userData: {
    username: string,
    password: string,
    picture?: string,
    position?: string,
    email: string,
    joined: Date,
    job_desk?: string,
    schedule?: any,
    contact?: string,
    status: 'ACTIVE' | 'INACTIVE'
  }) {
    const query = `
      INSERT INTO users (username, password, picture, position, email, joined, job_desk, schedule, contact, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      userData.username,
      userData.password,
      userData.picture || null,
      userData.position || null,
      userData.email,
      userData.joined,
      userData.job_desk || null,
      JSON.stringify(userData.schedule) || null,
      userData.contact || null,
      userData.status
    ];

    await this.db.execute(query, values);
  }

  async getAllUsers(): Promise<RowDataPacket[]> {
    const [rows]: [RowDataPacket[], any] = await this.db.query<RowDataPacket[]>('SELECT * FROM users');
    return rows; 
  }

  async getUserById(id: number): Promise<RowDataPacket | null> {
    const [rows]: [RowDataPacket[], any] = await this.db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null;
  }

  async updateUser(id: number, updatedData: Partial<{
    username: string,
    password: string,
    picture?: string,
    position?: string,
    email: string,
    joined: Date,
    job_desk?: string,
    schedule?: any,
    contact?: string,
    status: 'ACTIVE' | 'INACTIVE'
  }>) {
    const fields = Object.keys(updatedData).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(updatedData), id];

    const query = `UPDATE users SET ${fields} WHERE id = ?`;
    await this.db.execute(query, values);
  }

  async deleteUser(id: number) {
    await this.db.execute('DELETE FROM users WHERE id = ?', [id]);
  }
}
