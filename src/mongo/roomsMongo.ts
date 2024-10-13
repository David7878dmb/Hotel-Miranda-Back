import mongoose, { model } from 'mongoose';
import RoomService from '../services/roomServices';
import { Room } from '../interfaces/roomInterfaces';
const { Schema } = mongoose;

const roomsMongo = new Schema({
    id: String, // String is shorthand for {type: String}
    "room-type": String,
    number: Number,
    picture: String,
    "bed-type": String,
    "room-floor": String,
    facilities: [String],
    rate: String,
    status: String
  });

  const roomModel = model<Room>('Contact', roomsMongo);


// Exportar el modelo
export { roomModel };