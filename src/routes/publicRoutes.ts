import { Router } from 'express';
import { Request, Response, NextFunction } from 'express-serve-static-core';

const router = Router();

router.get('/info', (req: Request, res: Response) => {
    res.json({
        hotelName: 'Hotel Miranda',
        endpoints: [
            { route: '/rooms', methods: ['GET', 'POST', 'PUT', 'DELETE'] },
            { route: '/bookings', methods: ['GET', 'POST', 'PUT', 'DELETE'] },
            { route: '/contacts', methods: ['GET', 'POST', 'PUT', 'DELETE'] },
            { route: '/users', methods: ['GET', 'POST', 'PUT', 'DELETE'] }
        ]
    });
});

export default router;