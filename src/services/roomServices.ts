import { Room } from '../interfaces/roomInterfaces';
import roomsData from '../data/data__rooms.json'; // Asumiendo que tienes los datos en un archivo JSON

export const roomService = {
  fetchAll: async (): Promise<Room[]> => {
    // Aquí podrías hacer la consulta a la base de datos si tuvieras una
    return roomsData;
  },

  fetchOne: async (id: string): Promise<Room | undefined> => {
    const room = roomsData.find((room) => room.id === parseInt(id, 10));
    return room;
  },

  create: async (roomData: Room): Promise<Room> => {
    const newRoom = { ...roomData, id: roomsData.length + 1 };
    roomsData.push(newRoom);
    return newRoom;
  },

  update: async (id: string, updatedData: Partial<Room>): Promise<Room | null> => {
    const index = roomsData.findIndex((room) => room.id === parseInt(id, 10));
    if (index !== -1) {
      roomsData[index] = { ...roomsData[index], ...updatedData };
      return roomsData[index];
    }
    return null;
  },

  delete: async (id: string): Promise<void> => {
    const index = roomsData.findIndex((room) => room.id === parseInt(id, 10));
    if (index !== -1) {
      roomsData.splice(index, 1);
    }
  }
};
