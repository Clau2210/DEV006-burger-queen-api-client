import { instance } from './base.api'

const endpoint = 'login'

interface AuthResponse {
  accessToken: string;
}

export const login = async (email: string, password: string): Promise<string | null> => {
  try {
    const response = await instance.post<AuthResponse>(endpoint, {
      'email': email,
      'password': password
    });
    const { accessToken } = response.data;
    // Almacenar el token de acceso en localStorage
    localStorage.setItem('accessToken', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error en la autenticación:', error);
    return null;
  }
};