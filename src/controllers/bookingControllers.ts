import { Request, Response } from 'express';
import bookingService from '../services/bookingServices';

const BookingService = new bookingService();

export const bookingController = {
    getAllBooking: async (req: Request, res: Response) => {
        try {
            const Booking = await BookingService.getAll();
            res.json(Booking);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching Booking' });
        }
    },

    getBookingById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const Booking = await BookingService.getByID(id);
            if (!Booking) {
                res.status(404).json({ message: 'Booking not found' });
            } else {
                res.json(Booking);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching room' });
        }
    },

    createBooking: async (req: Request, res: Response) => {
        try {
            const newBooking = await BookingService.create(req.body);
            res.status(201).json(newBooking);
        } catch (error) {
            res.status(500).json({ message: 'Error creating Booking' });
        }
    },

    updateBooking: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const updatedBooking = await BookingService.update(id, req.body);
            res.json(updatedBooking);
        } catch (error) {
            res.status(500).json({ message: 'Error updating Booking' });
        }
    },

    delateBooking: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await BookingService.remove(id);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting Booking' });
        }
    }
};
