import mongoose, { model } from 'mongoose';
import RoomService from '../services/roomServices';
import { Room } from '../interfaces/roomInterfaces';
const { Schema } = mongoose;

const roomsMongo = new Schema({
    dateAdd: String,
    "room-type": String,
    number: Number,
    picture: String,
    "bed-type": String,
    "room-floor": String,
    facilities: [String],
    rate: String,
    discount:Number,
    status: String
  }, { timestamps: true });

  const roomModel = mongoose.models.Rooms || model<Room>('Rooms', roomsMongo);


// Exportar el modelo
export { roomModel };