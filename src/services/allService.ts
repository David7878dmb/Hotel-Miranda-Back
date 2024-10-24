import { RowDataPacket } from 'mysql2/promise';
import { Pool } from 'mysql2/promise';

export class CrudService<T> {
    protected db: Pool;
    protected tableName: string;

    constructor(db: Pool, tableName: string) {
        this.db = db;
        this.tableName = tableName;
    }

    // Obtener todos los registros de la tabla
    async getAll(): Promise<T[]> {
        const [rows] = await this.db.query<RowDataPacket[]>(`SELECT * FROM ${this.tableName}`);
        return rows as T[];
    }

    // Obtener por ID
    async getByID(id: number): Promise<T | null> {
        const [rows] = await this.db.query<RowDataPacket[]>(
            `SELECT * FROM ${this.tableName} WHERE id = ?`,
            [id]  // Usamos placeholders para evitar inyecciones
        );
        return rows.length > 0 ? (rows[0] as T) : null;
    }

    // Obtener por cualquier criterio
    async getByAnyone(props: { [key: string]: any }): Promise<T | null> {
        const keys = Object.keys(props).map(key => `${key} = ?`).join(' AND ');
        const values = Object.values(props);
        const [rows] = await this.db.query<RowDataPacket[]>(
            `SELECT * FROM ${this.tableName} WHERE ${keys}`,
            values  // Usamos placeholders
        );
        return rows.length > 0 ? (rows[0] as T) : null;
    }

    // Crear un nuevo registro
    async create(itemInput: Partial<T>): Promise<void> {
        const keys = Object.keys(itemInput).join(', ');
        const placeholders = Object.keys(itemInput).map(() => '?').join(', ');
        const values = Object.values(itemInput);
        
        await this.db.execute(
            `INSERT INTO ${this.tableName} (${keys}) VALUES (${placeholders})`,
            values  
        );
    }

    // Actualizar un registro
    async update(id: number, updatedItem: Partial<T>): Promise<void> {
        const updates = Object.keys(updatedItem).map(key => `${key} = ?`).join(', ');
        const values = [...Object.values(updatedItem), id];

        await this.db.execute(
            `UPDATE ${this.tableName} SET ${updates} WHERE id = ?`,
            values 
        );
    }

    // Eliminar un registro
    async remove(id: number): Promise<void> {
        await this.db.execute(
            `DELETE FROM ${this.tableName} WHERE id = ?`,
            [id]
        );
    }

    // Obtener fotos y amenities de las habitaciones con INNER JOIN
    async getRoomsWithAmenities(): Promise<any[]> {
        const [rows] = await this.db.query<RowDataPacket[]>(`
            SELECT rooms.id, rooms.picture, GROUP_CONCAT(rooms.facilities) AS amenities
            FROM rooms
            INNER JOIN bookings ON rooms.id = bookings.room_id
            GROUP BY rooms.id;
        `);
        return rows;
    }
}
