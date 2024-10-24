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


  export const createTableBooking= `
  CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  guest VARCHAR(255),
  picture VARCHAR(255),
  order_date DATE NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  discount DECIMAL(5, 2),
  notes JSON,
  room_id INT,
  status ENUM('Pending', 'Booked', 'Cancelled', 'Refund') NOT NULL,
  FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE SET NULL
);
`