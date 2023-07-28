// Create a new file ClientInput.tsx
import React from 'react';

const ClientInput: React.FC = () => {
  return (
    <div className='bg-[#292D32]'>
      <div className="relative mt-2 ml-3 rounded-md shadow-sm  ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ml-4">
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-1000 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Nombre del cliente"
        />
      </div>
    </div>
  );
};

export default ClientInput;
