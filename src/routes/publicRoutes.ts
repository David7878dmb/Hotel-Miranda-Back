import { Router } from 'express';
import { Request, Response, NextFunction } from 'express-serve-static-core';

const router = Router();

router.get('/info', (req, res) => {
    const hotelInfo = {
      hotelName: 'Hotel Miranda',
      endpoints: [
        //USER
        { method: 'GET', path: '/user', description: 'Get user info' },
        { method: 'GET', path: '/user/:id', description: 'Get user by ID' },
        { method: 'POST', path: '/user', description: 'Create a new user' },
        { method: 'PUT', path: '/user/:id', description: 'Update user by ID' },
        { method: 'DELETE', path: '/user/:id', description: 'Delete User by ID' },
        //ROOMS
        { method: 'GET', path: '/rooms', description: 'Get all rooms' },
        { method: 'GET', path: '/rooms/:id', description: 'Get room by ID' },
        { method: 'POST', path: '/rooms', description: 'Create a new room' },
        { method: 'PUT', path: '/rooms/:id', description: 'Update room by ID' },
        { method: 'DELETE', path: '/rooms/:id', description: 'Delete room by ID' },
        //CONTACTS
        { method: 'GET', path: '/contacts', description: 'Get all contacts' },
        { method: 'GET', path: '/contacts/:id', description: 'Get contacts by ID' },
        { method: 'POST', path: '/contacts', description: 'Create a new contact' },
        { method: 'PUT', path: '/contacts/:id', description: 'Update contact by ID' },
        { method: 'DELETE', path: '/contacts/:id', description: 'Delete contact by id' },
        //BOOKINGS
        { method: 'GET', path: '/bookings', description: 'Get all bookings' },
        { method: 'GET', path: '/bookings/:id', description: 'Get booking by ID' },
        { method: 'POST', path: '/bookings', description: 'Create a new booking' },
        { method: 'PUT', path: '/bookings/:id', description: 'Update booking by ID' },
        { method: 'DELETE', path: '/bookings/:id', description: 'Delete booking by ID' },
      ]
    };
    res.json(hotelInfo);
  });
export default router;