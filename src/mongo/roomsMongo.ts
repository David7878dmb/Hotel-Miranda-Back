import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomsMongo = new Schema({
    id: Number, // String is shorthand for {type: String}
    "room-type": String,
    number: Number,
    picture: String,
    "bed-type": String,
    "room-floor": String,
    facilities: [String],
    rate: String,
    status: String
  });