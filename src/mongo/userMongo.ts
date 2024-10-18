import mongoose, { model } from 'mongoose';
import { User } from '../interfaces/userInterfaces';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  picture: String,
  position: String,  // Corregido de 'posotion' a 'position'
  email: String,
  joined: String,  
  "job-desk": String,
  schedule: [Schema.Types.Mixed], 
  contact: String,
  status: String
}, { timestamps: true });

export interface UserDocument extends User, Document {}

export const userModel = mongoose.models.User || model<UserDocument>('User', userSchema);