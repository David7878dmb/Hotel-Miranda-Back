import { Request, Response } from 'express';
import ContactService from '../services/contactService';

const contactService = new ContactService();

export const contactController = {
    // Obtener todos los contactos
    getAllContact: async (req: Request, res: Response) => {
        try {
            const contacts = await contactService.getAll();
            res.json(contacts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching contacts' });
        }
    },

    // Obtener un contacto por ID
    getContactById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const contact = await contactService.getByID(id);
            if (!contact) {
                res.status(404).json({ message: 'Contact not found' });
            } else {
                res.json(contact);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching contact' });
        }
    },

    // Crear un nuevo contacto
    createContact: async (req: Request, res: Response) => {
        try {
            const newContact = await contactService.create(req.body);
            res.status(201).json(newContact);
        } catch (error) {
            res.status(500).json({ message: 'Error creating contact' });
        }
    },

    // Actualizar un contacto existente por ID
    updateContact: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const updatedContact = await contactService.update(id, req.body);
            if (!updatedContact) {
                res.status(404).json({ message: 'Contact not found or not updated' });
            } else {
                res.json(updatedContact);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating contact' });
        }
    },

    // Eliminar un contacto por ID
    deleteContact: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const deleted = await contactService.remove(id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Contact not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting contact' });
        }
    }
};
