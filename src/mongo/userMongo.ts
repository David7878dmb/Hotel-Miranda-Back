import mongoose, { model } from 'mongoose';
import { User } from '../interfaces/userInterfaces';
const { Schema } = mongoose;

export const userMongo = new Schema({
    id: Number,
    username: String,
    password: String,
    picture: String,
    joined: String,  
    "job-desk": String,
    schedule: [], 
    contact: String,
    status: String
  });

export const userModel = model<User>('User', userMongo);