// import React,{useEffect, useState} from 'react'
// import { useParams } from 'react-router-dom';
// import { uniqueUser } from '../../utils/functions';



// interface RouteParams {
//   [key: string]: string | undefined;
//   }
  
//   const Users: React.FC = () => {
//     const [Users, setUser] = useState<Users | null>(null);
  
//     const params = useParams<RouteParams>();
  
//     useEffect(() => {
//       uniqueUser(params.email, setUser);
//     }, [params.email]);
  
//     return (
//       <>
//         {user !== null ? (
//           <div>
//             <h2>User {params.email}</h2>
//             <p>con el nombre {user.name}</p>
//           </div>
//         ) : (
//           <p>No user</p>
//         )}
//       </>
//     );
//   };
  


// export default Users

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

export default Users