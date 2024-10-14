import { faker } from '@faker-js/faker';
import { Room } from '../../interfaces/roomInterfaces'; // Asumiendo que tienes una interfaz Room
import number from '../../utils/random';

export const fakeRooms = (): Room => {
  const roomTypes = ['Single Bed', 'Double Bed', 'Double Superior', 'Suite'];
  const bedTypes = ['Single', 'Double'];

  return {
    id: faker.string.uuid(),
    "room-type": faker.helpers.arrayElement(roomTypes),
    number: number({ min: 100, max: 999 }, 0),
    picture: faker.image.url(),
    "bed-type": faker.helpers.arrayElement(bedTypes),
    "room-floor": `A-${number({ min: 1, max: 5 }, 0)}`,

    facilities: faker.helpers.arrayElements([
      'Double Bed', 'Single Bed', 'LED TV', 'Wifi', 'Coffee Set', 'AC', 'Bathup', 'Shower', 'Towel'
    ], 5),
    rate: `$${number({ min: 50, max: 200 }, 2)}`,
    status: faker.helpers.arrayElement(['Available', 'Booked'])
  }
}
