import mongoose, { model, Schema } from 'mongoose';
import { BookingInput } from '../interfaces/bookingInterfaces';
import { Types } from "mongoose";

const BookingSchema = new Schema<BookingInput>({
    guest: { type: String },
    picture: { type: String },
    orderDate: { type: String },
    checkIn: { type: String },
    checkOut: { type: String },
    discount: { type: Number },
    notes: { type: [String] },
    roomId: { type: Schema.Types.ObjectId, ref: 'Room' },
    status: { type: String }
} ,{ timestamps: true }); 

export const BookingModel = mongoose.models.Booking || model<BookingInput>('Booking', BookingSchema);