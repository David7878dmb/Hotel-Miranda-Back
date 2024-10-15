import { Model } from "mongoose";

export class CrudService<T> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }


    async getAllBooking(populateFields: string[]=[]): Promise<T[]> {
        return this.model.find().populate(populateFields.join(' ')).then((models: T[]) => models);
    }

    async getByIDBooking(id: string, populateFields: string[]=[]): Promise<T | null> {
        return await this.model.findById(id).populate(populateFields.join(' '));
    }

    // Obtener todos los elementos
    async getAll(): Promise<T[]> {
        return await this.model.find();
    }

    // Obtener por ID
    async getByID(id: number): Promise<T | null> {
        return await this.model.findOne({ id }); 
    }

    //Obtener lo que sea
    async getByAnyone(props: {}): Promise<T | null> {
        return await this.model.findOne(props); 
    }

    // Crear un nuevo elemento
    async create(itemInput: Partial<T>): Promise<T> {
        const newItem = new this.model(itemInput);
        await newItem.save();
        return newItem;
    }

    // Actualizar un elemento existente
    async update(id: number, updatedItem: Partial<T>): Promise<T | null> {
        return await this.model.findOneAndUpdate({ id }, updatedItem, { new: true });
    }

    // Eliminar un elemento por ID
    async remove(id: number): Promise<boolean> {
        const result = await this.model.deleteOne({ id });
        return result.deletedCount === 1;
    }
}