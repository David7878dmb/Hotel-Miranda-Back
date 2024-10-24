import { Request, Response } from 'express';
import {ContactService} from '../services/contactService';
import { connectToDB } from '../utils/connectionSQL';

let contactService: ContactService;

export const initializeContactService = async () => {
  const db = await connectToDB();
  contactService = new ContactService(db); 
};

initializeContactService();

export const contactController = {
  
  // Obtener todos los contactos
  getAllContact: async (req: Request, res: Response) => {
    try {
      const contacts = await contactService.getAllContacts();
      res.status(200).json(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Obtener un contacto por ID
  getContactById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const contact = await contactService.getContactById(Number(id));
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.status(200).json(contact);
    } catch (error) {
      console.error('Error fetching contact:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Crear un nuevo contacto
  createContact: async (req: Request, res: Response) => {
    try {
      const newContact = req.body;
      await contactService.createContact(newContact);
      res.status(201).json({ message: 'Contact created successfully' });
    } catch (error) {
      console.error('Error creating contact:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Actualizar un contacto existente por ID
  updateContact: async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      await contactService.updateContact(Number(id), updatedData);
      res.status(200).json({ message: 'Contact updated successfully' });
    } catch (error) {
      console.error('Error updating contact:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Eliminar un contacto por ID
  deleteContact: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await contactService.deleteContact(Number(id));
      res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      console.error('Error deleting contact:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
