import mongoose, { model } from 'mongoose';
import { Contact } from '../interfaces/contactInterfaces';
import { connect } from 'http2';
const { Schema } = mongoose;

export const contactMongo = new Schema<Contact>({
    id: {type: String, required: true},
    name: {type: String, required: true},
    date: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    value: Number
  });   

// 3. Create a Model.
const contactModel = mongoose.models.Contact || model<Contact>('Contact', contactMongo);




// Exportar el modelo
export { contactModel };