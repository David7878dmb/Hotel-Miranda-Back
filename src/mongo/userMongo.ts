import mongoose, { model } from 'mongoose';
import { User } from '../interfaces/userInterfaces';
const { Schema } = mongoose;

export const userMongo = new Schema({
    username: String,
    password: String,
    picture: String,
    posotion: String,
    email: String,
    joined: String,  
    "job-desk": String,
    schedule: [], 
    contact: String,
    status: String
  });

export const userModel = mongoose.models.User || model<User>('User', userMongo);