import { instance } from './base.api';


const endpoint = "users";

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  
}

interface AuthResponse {
  accessToken: string;
  user: User
}

export const User = async (email: string, role: string): Promise<AuthResponse | null> => {
  try {
    const response = await instance.post<AuthResponse>(endpoint, {
      'email': email,
      'role': role
    });
    const { accessToken, user } = response.data;
    if (!user || !user.id) {
      throw new Error('ID del usuario no está presente en la respuesta.');
    }
    // Almacenar el token de acceso en localStorage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userId', user.id.toString());
    return { accessToken, user };
  } catch (error) {
    console.error('Error en la autenticación:', error);
    return null;
  }
};