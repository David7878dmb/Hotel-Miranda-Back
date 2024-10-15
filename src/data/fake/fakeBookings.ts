import { faker } from '@faker-js/faker';
import { bookingParams } from '../../app/paramsHotel';
import { Types } from 'mongoose';
import { BookingStatus } from '../../interfaces/bookingInterfaces';
import random from '../../utils/random';
import { roomModel } from '../../mongo/roomsMongo';

export const fakeBooking = async () => {

  const checkIn = faker.date.future();

  const rooms = await roomModel.find();
  if (rooms.length === 0) {
    throw new Error("No rooms available.");
  }
  const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];

  return {
    guest: faker.person.fullName(),
    picture: faker.image.url(),
    orderDate: faker.date.past().toISOString(),
    checkIn: checkIn.toISOString(),
    checkOut: faker.date.future({ refDate: checkIn }).toISOString(),
    discount: random.number(bookingParams.discounts, 0),
    notes: faker.lorem.sentences(3).split('. ').map(note => note.trim()).filter(Boolean),
    room: randomRoom._id,
    status: faker.helpers.enumValue(BookingStatus)
  };
};