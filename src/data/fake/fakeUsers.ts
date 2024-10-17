import { faker } from '@faker-js/faker';
import { User } from '../../interfaces/userInterfaces';
import number from '../../utils/random';
import { userParams } from '../../app/paramsHotel';

export const fakeUsers = (): User => {
  return {
    username: faker.person.fullName(),  
    password: faker.internet.password(),
    picture: faker.image.avatar(),
    position: faker.helpers.arrayElement(userParams.positions),
    email: faker.internet.email(),
    joined: faker.date.past().toISOString(),
    "job-desk": faker.lorem.sentence(),
    schedule: faker.helpers.arrayElements(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 2),
    contact: faker.phone.number(),
    status: faker.helpers.arrayElement(['Active', 'Inactive']),
  }
}
