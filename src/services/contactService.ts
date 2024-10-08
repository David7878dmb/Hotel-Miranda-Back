import { Contact } from '../interfaces/contactInterfaces';
import { contactModel } from '../mongo/contactMongo';
import { CrudService } from './allService';


class ContactService extends CrudService<Contact> {
  constructor() {
    console.log('miau2');
    super(contactModel);
  }
} 
export default ContactService;



/*const contacts: Contact[] = contactData;

export const contactService = {
  fetchAll: async (): Promise<Contact[]> => {
    // Retorna todos los contactos
    
    return await contactModel.find();
  },

  fetchOne: async (id: string): Promise<Contact | undefined | null> => {
    // Encuentra un contacto por ID
    const contact = contacts.find((contact) => contact.id === parseInt(id, 10));
    return await contactModel.findOne({id:id});
  },

  create: async (contactData: Contact): Promise<Contact> => {
    // Crea un nuevo contacto
    const newContact = { ...contactData, id: contacts.length + 1 };
    contacts.push(newContact);
    return newContact;
  },

  update: async (id: string, updatedData: Partial<Contact>): Promise<Contact | null> => {
    // Actualiza un contacto existente
    const index = contacts.findIndex((contact) => contact.id === parseInt(id, 10));
    if (index !== -1) {
      contacts[index] = { ...contacts[index], ...updatedData };
      return contacts[index];
    }
    return null;
  },

  delete: async (id: string): Promise<void> => {
    // Elimina un contacto por ID
    const index = contacts.findIndex((contact) => contact.id === parseInt(id, 10));
    if (index !== -1) {
      contacts.splice(index, 1);
    }
  }
};
*/