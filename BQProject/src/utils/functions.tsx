// // import axios from 'axios';
// import axios, { AxiosResponse } from 'axios';


// // const allUsers = async (state: (users: User[]) => void): Promise<void> => {
// //     const response: AxiosResponse<User[]> = await axios.get<User[]>('http://localhost:8080/users');
// //     state(response.data.results);
// //   };

// //   const uniqueUser = async (email, state) => {
// //     const response: AxiosResponse<User[]> = await axios.get<User[]>(`http://localhost:8080/users${email}`);
// //     state(response.data.results);
// //   }
// // export {
// //     allUsers,
// //     uniqueUser
// // }




// interface User {
//   email: string;
//   // Define the properties of a user
//   // For example: id: number; name: string; email: string; etc.
// }

// const allUsers = async (state: (users: User[]) => void): Promise<void> => {
//   try {
//     const response: AxiosResponse<User[]> = await axios.get<User[]>('http://localhost:8080/login');
//     state(response.data);
//   } catch (error) {
//     console.error('Error fetching all users:', error);
//     // Handle the error, e.g., show an error message or retry the request
//   }
// };

// const uniqueUser = async (email: string, state: (user: User | null) => void): Promise<void> => {
//   try {
//     const response: AxiosResponse<User[]> = await axios.get<User[]>(`http://localhost:8080/users?email=${email}`);
//     const user = response.data.length ? response.data[0] : null;
//     state(user);
//   } catch (error) {
//     console.error(`Error fetching user with email ${email}:`, error);
//     // Handle the error, e.g., show an error message or retry the request
//   } 
// };

// export { allUsers, uniqueUser };

import axios from 'axios';

interface AuthResponse {
  access_token: string;
}

export const Login = async (email: string, password: string): Promise<string | null> => {
  try {
    const response = await axios.post<AuthResponse>('/api/login', { email, password });
    const { access_token } = response.data;
    // Almacenar el token de acceso en localStorage
    localStorage.setItem('accessToken', access_token);
    return access_token;
  } catch (error) {
    console.error('Error en la autenticación:', error);
    return null;
  }
};


// export Login;