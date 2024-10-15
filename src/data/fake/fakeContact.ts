import { faker } from '@faker-js/faker';
import { Contact } from "../../interfaces/contactInterfaces";
import { contactParams } from '../../app/paramsHotel';
import random from '../../utils/random';

export const fakeContact = ():Contact => {
      const archived = random.boolean();

      return {
        name: faker.person.fullName(),
        date: faker.date.past().toUTCString(),
        email: faker.internet.email(),
        phone: faker.phone.toString(),
        subject: faker.lorem.sentence(),
        comment: faker.lorem.sentences(),
        archived: archived
      }
}