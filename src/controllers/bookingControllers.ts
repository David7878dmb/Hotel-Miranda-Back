import { Request, Response } from 'express';
import { BookingService } from '../services/bookingServices';
import { connectToDB } from '../utils/connectionSQL';

let bookingService : BookingService;

export const bookingController = {
    getAllBooking: async (req: Request, res: Response) => {
        try {
            const bookings = await bookingService.getAll();
            res.json(bookings);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching bookings' });
        }
    },

    getBookingById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const booking = await bookingService.getByID(id);
            if (!booking) {
                res.status(404).json({ message: 'Booking not found' });
            } else {
                res.json(booking);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching booking' });
        }
    },

    createBooking: async (req: Request, res: Response) => {
        try {
            const newBooking = await bookingService.create(req.body);
            res.status(201).json(newBooking);
        } catch (error) {
            res.status(500).json({ message: 'Error creating booking' });
        }
    },

updateBooking: async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedBooking = await bookingService.update(id, req.body);
        
        // Verifica si la actualización fue exitosa (puedes ajustar la condición según tu lógica)
        if (updatedBooking) {
            res.json(updatedBooking);
        } else {
            res.status(404).json({ message: 'Booking not found or not updated' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating booking' });
    }
},

deleteBooking: async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const deleted = await bookingService.remove(id);

        // Verifica si la reserva fue eliminada (ajusta según tu lógica)
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting booking' });
    }
}}