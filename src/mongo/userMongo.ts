import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactMongo = new Schema({
    id: Number,
    name: String,
    picture: String,
    joined: String,  
    "job-desk": String,
    schedule: [], 
    contact: String,
    status: String
  });