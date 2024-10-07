import mongoose, { model } from 'mongoose';
import { Contact } from '../interfaces/contactInterfaces';
import { connect } from 'http2';
const { Schema } = mongoose;

const contactMongo = new Schema<Contact>({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    date: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    value: Number
  });   

// 3. Create a Model.
const contactModel = model<Contact>('Contact', contactMongo);

run().catch(err => console.log(err));

async function run() {
  try {
      // 4. Connect to MongoDB
      await connect('mongodb://localhost:27017');
    
      const billContact = new contactModel({
        id: 102,
        name: "Bill",
        date: "2001-09-08",
        email: "billytheboy@email.com",
        phone: "666 777 987",
        value: 2,
      });
      await billContact.save();
      console.log(billContact.email);
    
  } catch (error) {
    console.error('Error al conectar o guardar en MongoDB:', error);
  }
}

run();

// Exportar el modelo
export { contactModel };