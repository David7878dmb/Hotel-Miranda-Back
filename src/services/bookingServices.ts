import { Booking } from '../interfaces/bookingInterfaces';
import bookingData from '../data/data__bookings.json';

// Convierte los datos JSON en un array de Booking
const bookingsData: Booking[] = bookingData;

export const bookingService = {
  fetchAll: async (): Promise<Booking[]> => {
    // Retorna todas las reservas
    return bookingsData;
  },

  fetchOne: async (id: string): Promise<Booking | undefined> => {
    // Encuentra una reserva por ID
    const booking = bookingsData.find((booking) => booking.id === parseInt(id, 10));
    return booking;
  },

  create: async (bookingData: Booking): Promise<Booking> => {
    // Crea una nueva reserva
    const newBooking = { ...bookingData, id: bookingsData.length + 1 };
    bookingsData.push(newBooking);
    return newBooking;
  },

  update: async (id: string, updatedData: Partial<Booking>): Promise<Booking | null> => {
    // Actualiza una reserva existente
    const index = bookingsData.findIndex((booking) => booking.id === parseInt(id, 10));
    if (index !== -1) {
      bookingsData[index] = { ...bookingsData[index], ...updatedData };
      return bookingsData[index];
    }
    return null;
  },

  delete: async (id: string): Promise<void> => {
    // Elimina una reserva por ID
    const index = bookingsData.findIndex((booking) => booking.id === parseInt(id, 10));
    if (index !== -1) {
      bookingsData.splice(index, 1);
    }
  }
};
