import { BookingModel } from '../mongo/bookingMongo';
import { BookingInput } from '../interfaces/bookingInterfaces';
import { CrudService } from './allService';

class BookingService extends CrudService<BookingInput> {
  populateFields = ['room']
  constructor() {
    super(BookingModel);
  }

  async getAllBooking(): Promise<BookingInput[]> {
    return super.getAllBooking(this.populateFields);
  }

  async getByIDBooking(id: string): Promise<BookingInput | null> {
    return super.getByIDBooking(id, this.populateFields); 
  }
}

export default BookingService;