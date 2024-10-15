import { faker } from '@faker-js/faker';
import { Room } from '../../interfaces/roomInterfaces'; 
import { roomsParams } from '../../app/paramsHotel';
import random from '../../utils/random';

export const fakeRooms = (): Room => {

  return {
    dateAdded: faker.date.past().toUTCString(),

    "room-type": `Deluxe ${faker.helpers.arrayElement(roomsParams.letters)}`,
    
    number:random.number(roomsParams.numbers, 0),
    
    picture: faker.image.url(),
    
    "bed-type": faker.helpers.arrayElement(roomsParams.types),

    "room-floor": faker.helpers.arrayElement(roomsParams.floors),

    facilities: faker.helpers.arrayElements(roomsParams.facilities),

    rate: `$${random.number(roomsParams.rates, 2)}`,

    discount: random.number(roomsParams.discounts, 0),

    status: faker.helpers.arrayElement(['Available', 'Booked'])
  }
}
