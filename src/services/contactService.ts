import { Pool, RowDataPacket } from 'mysql2/promise';
import { Contact } from '../interfaces/contactInterfaces';

export class ContactService {
  private db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  async getAllContacts(): Promise<RowDataPacket[]> {
    const [rows]: [RowDataPacket[], any] = await this.db.query<RowDataPacket[]>('SELECT * FROM contacts');
    return rows;
  }

  async getContactById(id: number): Promise<RowDataPacket | null> {
    const [rows]: [RowDataPacket[], any] = await this.db.query('SELECT * FROM contacts WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null;
  }

  async createContact(contactData: {
    name: string,
    date: string,
    email: string,
    phone: string,
    subject: string,
    comment: string,
    archived: boolean
  }) {
    const query = `
      INSERT INTO contacts (name, date, email, phone, subject, comment, archived)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    const values = [
      contactData.name,
      contactData.date,
      contactData.email,
      contactData.phone,
      contactData.subject,
      contactData.comment,
      contactData.archived
    ];

    await this.db.execute(query, values);
  }

  async updateContact(id: number, updatedData: Partial<{
    name: string,
    date: string,
    email: string,
    phone: string,
    subject: string,
    comment: string,
    archived: boolean
  }>) {
    const fields = Object.keys(updatedData).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(updatedData), id];

    const query = `UPDATE contacts SET ${fields} WHERE id = ?`;
    await this.db.execute(query, values);
  }

  async deleteContact(id: number) {
    await this.db.execute('DELETE FROM contacts WHERE id = ?', [id]);
  }
}
