export interface Booking {
    id: number;
    guest: string;
    picture: string;
    orderDate: string; 
    checkIn: string;
    checkOut: string;
    discount: number;
    notes: string[];
    roomId: number;
    status: string; //En el formulario asignar CANCELLED CONFIRMED y PENDING
  }
  