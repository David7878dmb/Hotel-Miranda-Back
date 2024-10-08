import mongoose, { model } from 'mongoose';
import { Contact } from '../interfaces/contactInterfaces';
import { connect } from 'http2';
const { Schema } = mongoose;

export const contactMongo = new Schema<Contact>({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    date: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    value: Number
  });   

// 3. Create a Model.
const contactModel = model<Contact>('Contact', contactMongo);



export async function run() {
  try {
      const billContact = new contactModel({
        id: 104,
        name: "Pepita",
        date: "2001-09-08",
        email: "pepita@email.com",
        phone: "666 777 987",
        value: 2,
      });
      await billContact.save();
      console.log(billContact.email);
    
  } catch (error) {
    console.error('Error al conectar o guardar en MongoDB:', error);
  }
}


// Exportar el modelo
export { contactModel };