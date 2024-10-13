import { Room } from '../interfaces/roomInterfaces';
import { roomModel } from '../mongo/roomsMongo';
import { CrudService } from './allService';

class RoomService extends CrudService<Room> {
    constructor() {
        super(roomModel);
    }
}

export default RoomService;
