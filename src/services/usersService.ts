import { User } from '../interfaces/userInterfaces';
import usersData from '../data/data__users.json'; // Asumiendo que tienes los datos en un archivo JSON

export const userService = {
  fetchAll: async (): Promise<User[]> => {
    // Retorna todos los usuarios
    return usersData;
  },

  fetchOne: async (id: string): Promise<User | undefined> => {
    // Encuentra un usuario por ID
    const user = usersData.find((user) => user.id === parseInt(id, 10));
    return user;
  },

  create: async (userData: User): Promise<User> => {
    // Crea un nuevo usuario
    const newUser = { ...userData, id: usersData.length + 1 };
    usersData.push(newUser);
    return newUser;
  },

  update: async (id: string, updatedData: Partial<User>): Promise<User | null> => {
    // Actualiza un usuario existente
    const index = usersData.findIndex((user) => user.id === parseInt(id, 10));
    if (index !== -1) {
      usersData[index] = { ...usersData[index], ...updatedData };
      return usersData[index];
    }
    return null;
  },

  delete: async (id: string): Promise<void> => {
    // Elimina un usuario por ID
    const index = usersData.findIndex((user) => user.id === parseInt(id, 10));
    if (index !== -1) {
      usersData.splice(index, 1);
    }
  }
};
