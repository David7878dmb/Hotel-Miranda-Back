import mongoose, { model } from 'mongoose';
import { Contact } from '../interfaces/contactInterfaces';
import { connect } from 'http2';
const { Schema } = mongoose;

export const contactMongo = new Schema<Contact>({
    name:String,
    date:String,
    email:String,
    phone:String,
    subject: String,
    comment: String,
    archived: Boolean
  } ,{ timestamps: true }); 

// 3. Create a Model.
const contactModel = mongoose.models.Contact || model<Contact>('Contact', contactMongo);




// Exportar el modelo
export { contactModel };