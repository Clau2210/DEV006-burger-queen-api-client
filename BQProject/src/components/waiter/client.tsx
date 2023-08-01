/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Create a new file ClientInput.tsx
import React, { useState} from 'react';

interface ClientInputProps {
  onClientNameChange: (newName: string) => void; // Función de devolución de llamada para enviar el nombre del cliente al componente padre
}

const ClientInput: React.FC<ClientInputProps> = ({ onClientNameChange }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onClientNameChange(event.target.value);
  };

  // const handleSaveClientName = () => {
  //   onClientNameChange(inputValue); // Llama a la función de devolución de llamada para enviar el nombre del cliente al componente padre
  // };

  return (
    <div className='bg-[#292D32]'>
      <div className="relative mt-2 ml-3 rounded-md shadow-sm  ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ml-4">
        </div>
        <input
          type="text"
          name="clientName"
          id="clientName"
          className="block w-1000 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Nombre del cliente"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ClientInput;


// const ClientInput: React.FC = () => {
//   const [clientName, setClientName] = useState<string>('');
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setClientName(event.target.value);
//   };
//   return (
//     <div className='bg-[#292D32]'>
//       <div className="relative mt-2 ml-3 rounded-md shadow-sm  ">
//         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ml-4">
//         </div>
//         <input
//           type="text"
//           name="price"
//           id="price"
//           className="block w-1000 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           placeholder="Nombre del cliente"
//           value={clientName}
//           onChange={handleInputChange}
//         />
        
//       </div>
//     </div>
//   );
// };

// export default ClientInput;
