import { Contact } from '../interfaces/contactInterfaces';
import { contactModel } from '../mongo/contactMongo';
import { CrudService } from './allService';


class ContactService extends CrudService<Contact> {
  constructor() {
    super(contactModel);
  }
} 
export default ContactService;

