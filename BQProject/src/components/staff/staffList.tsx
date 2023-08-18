import React, { useEffect, useState } from 'react';
import AddStaff from './addStaff.tsx';
import {  User } from '../api/staff.api.ts'; 
import { FaEdit, FaTrash } from 'react-icons/fa';
import ImageLogo from "../../assets/images/BQueenLogoPantallas.png";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
 
  }
  const Staff: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Initialize as false
    const [newUser, setNewUser] = useState<User>({
      id: 0,
      name: '',
      email: '',
      role: '',
      online: true,
    });
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const usersData = await getUsers();
          setUsers(usersData);
        } catch (error) {
          // Handle error if needed
        }
      };
  
      fetchUsers();
    }, []);
  
    const addUser = (newUser: User) => {
      setUsers([...users, newUser]);
      setIsModalOpen(false); // Close the modal after adding user
    };

 
    return (
      <div className="bg-[#292D32]">
        <div>
          <h1 className="text-2xl text-center font-semibold mt-20 mb-4 text-[#f8fafc]">LISTA DE EMPLEADOS</h1>
        </div>
        <div className="flex justify-end">
          <img
            className="my-0 w-[250px] justify-center"
            src={ImageLogo}
            alt="Burguer Queen"
          />
        </div>
        <div className='flex justify-between mb-4 ml-10'>
          <h4 className="text-2xl font-semibold mb-4 text-[#EE4D39]">Nombre completo</h4>
          <h4 className="text-2xl font-semibold mb-4 text-[#EE4D39]">Cargo</h4>
        </div>
  
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Agregar
        </button>
  
        <ul role="list" className="divide-y divide-gray-100">
          {users.map((user) => (
            <li key={user.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-[#f8fafc]">{user.name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-[#f8fafc]">{user.email}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-[#f8fafc]">{user.role}</p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm font-semibold leading-6 mr-10 text-[#f8fafc]">{user.role}</p>
                <FaEdit className="cursor-pointer text-gray-300 hover:text-[#EE4D39] h-15 w-15" />
                <FaTrash className="mx-5 cursor-pointer text-gray-300 hover:text-[#EE4D39] h-15 w-15" />
              </div>
            </li>
          ))}
        </ul>
  
        <AddStaff
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddUser={addUser}
          newUser={newUser}
          setNewUser={setNewUser}
        />
      </div>
    );
  };
  
  export default Staff;
