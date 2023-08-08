import axios from 'axios';

interface User {
  [key: string]: string | undefined;
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      throw new Error('No hay token de acceso');
    }
    const response = await axios.get<User[]>('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    return [];
  }
};

export default User;