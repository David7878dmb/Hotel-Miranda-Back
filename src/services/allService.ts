import { Model } from "mongoose";

export class CrudService<T extends Document> {
    protected model: Model<T>;

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
    async getByID(id: string): Promise<T | null> {
        return this.model.findById(id);
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
    
    async update(id: string, updatedItem: Partial<T>): Promise<T | null> {
        return await this.model.findByIdAndUpdate(id, updatedItem, { new: true });
    }

    async remove(id: string): Promise<boolean> {
        const result = await this.model.findByIdAndDelete(id);
        return result !== null;
    }
}