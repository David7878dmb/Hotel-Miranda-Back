import { faker } from '@faker-js/faker';
import { Contact } from "../../interfaces/contactInterfaces";
import { contactParams } from '../../app/paramsHotel';
import number from '../../utils/random';

export const fakeContact = ():Contact => {
      return {
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        date: faker.date.past().toUTCString(),
        email: faker.internet.email(),
        phone: faker.phone.toString(),
        value: number(contactParams.value)
      }
}