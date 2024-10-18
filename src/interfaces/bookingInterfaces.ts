import { Types } from "mongoose";

export enum BookingStatus {
  Pending = "Pending", Booked = "Booked", Cancelled = "Cancelled", Refund = "Refund"
}

export interface Booking extends Document{
    guest: string;
    picture: string;
    orderDate: string; 
    checkIn: string;
    checkOut: string;
    discount: number;
    notes: string[];
    roomId: Types.ObjectId;
    status: BookingStatus;
  }

  export type BookingInput = Omit<Booking, 'id'>;