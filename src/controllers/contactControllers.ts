import { Request, Response } from 'express';
import { contactService } from '../services/contactService';

export const contactController = {
    getAllContact: async (req: Request, res: Response) => {
        try {
            const contacts = await contactService.fetchAll();
            res.json(contacts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching contacts' });
        }
    },

    getContactById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const contact = await contactService.fetchOne(id);
            if (!contact) {
                res.status(404).json({ message: 'Contact not found' });
            } else {
                res.json(contact);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching contact' });
        }
    },

    createContact: async (req: Request, res: Response) => {
        try {
            const newContact = await contactService.create(req.body);
            res.status(201).json(newContact);
        } catch (error) {
            res.status(500).json({ message: 'Error creating contact' });
        }
    },

    updateContact: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const updatedContact = await contactService.update(id, req.body);
            res.json(updatedContact);
        } catch (error) {
            res.status(500).json({ message: 'Error updating contact' });
        }
    },

    delateContact: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await contactService.delete(id);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting contact' });
        }
    }
};
