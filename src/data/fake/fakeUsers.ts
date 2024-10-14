import { faker } from '@faker-js/faker';
import { User } from '../../interfaces/userInterfaces';
import number from '../../utils/random';

export const fakeUsers = (): User => {
  return {
    id: faker.string.uuid(),
    username: faker.name.fullName(),
    password: faker.internet.password(),
    picture: faker.image.avatar(),
    joined: faker.date.past().toISOString(),
    "job-desk": faker.lorem.sentence(),
    schedule: faker.helpers.arrayElements(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 2),
    contact: faker.phone.number(),
    status: faker.helpers.arrayElement(['Active', 'Inactive']),
  }
}
