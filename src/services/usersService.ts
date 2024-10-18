import { User } from '../interfaces/userInterfaces';
import { userModel} from '../mongo/userMongo';
import { CrudService } from './allService';


class UserService extends CrudService<User> {
  constructor() {
      super(userModel);
  }
}

export default UserService;



