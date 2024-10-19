import { Request, Response } from 'express';
//import { ContactService } from '../services/ContactService';
import ContactService from '../services/contactService';

const contactService = new ContactService();

export const contactController = {
    getAllContact: async (req: Request, res: Response) => {
        try {
            console.log('miaumiaumiau');
            const contacts = await contactService.getAll();
            res.send(contacts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching contacts' });
        }
    },

  /*  getContactById: async (req: Request, res: Response) => {
        try {
            const contact = await contactService.getByID(+req.params.id);
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
            const newContact = contactService.create(req.body);
            res.status(201).json(newContact);
        } catch (error) {
            res.status(500).json({ message: 'Error creating contact' });
        }
    },

    updateContact: async (req: Request, res: Response) => {
        try {
            const updatedContact = contactService.update(+req.params.id, req.body);
            res.json(updatedContact);
        } catch (error) {
            res.status(500).json({ message: 'Error updating contact' });
        }
    },

    deleteContact: async (req: Request, res: Response) => {  
        contactService.remove(+req.params.id).then(deleted => {
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).send({ message: 'Contact not found' });
            }
        });
    }*/
};
