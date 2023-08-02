/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/ban-types */


import React, { useState, useEffect, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ImageLogo from '../../assets/images/BQueenLogoPantallas.png';
import { searchProducts } from '../../api/waiterBf';
import  ClientInput  from '../waiter/client';
import TableSelect from '../waiter/table';
import ProductsList, { Product } from '../waiter/product';
import { format } from 'date-fns';
import { saveOrderToKitchen } from '../../api/createOrder';
import { OrderProduct } from '../../api/order';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}


const navigation: NavItem[] = [
  { name: 'Desayuno', href: '#', current: true },
  { name: 'Almuerzo y cena', href: '#', current: false },
];


interface BreakfastLunchButtonsProps {}

// Creamos el componente usando una función de flecha. Nota el uso de FC (Funcional Component) de React.
const BreakfastLunchButtons: React.FC<BreakfastLunchButtonsProps> = () => {
  // Estos son los handlers para los eventos de clic en los botones
  const [userId, setUserId] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [clientName, setClientName] = useState<string>(''); // Estado para almacenar el nombre del cliente
  const [selectedProducts, setSelectedProducts] = useState<OrderProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [status, setStatus] = useState<string>('pending');
  const [dataEntry, setDataEntry] = useState<string>(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));


  useEffect(()=>{
    searchProducts()
    .then((response) => {
      console.log('Esta es una respuesta a useEffect');
      setProducts(response);
    })
    .catch();
  }, []);
  
  const handleClientNameChange = (newName: string) => {
    setClientName(newName); // Almacena el nombre del cliente en el estado
  };

  const handleAddToOrder = (index: number, qty: number) => {
    setSelectedProducts((prevSelected) => {
      // Make sure selectedProducts has the same length as products
      const updatedProducts = [...prevSelected];
      while (updatedProducts.length < products.length) {
        updatedProducts.push({ product: products[updatedProducts.length], qty: 0 });
      }
      updatedProducts[index].qty = qty;
      return updatedProducts;
    });
  };

  const handleSendToKitchen = async () => {
    const filteredProducts = selectedProducts.filter((product) => product.qty > 0);
    const token = localStorage.getItem('accessToken') || '';
    const orderData = {
      userId: userId, // Replace with the correct user ID
      client: clientName,
      products: filteredProducts,
      status: status,
      dataEntry: dataEntry,
        };

    try {
       // Asegúrate de pasar los argumentos requeridos a la función saveOrderToKitchen
    await saveOrderToKitchen(orderData, token);
     
    console.log('Order created');
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle error, show an error message, etc.
    }

  };

  return (
    <>
      <Disclosure as="nav" className="bg-[#292D32] py-10">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-[#EE4D39] text-[#292D32' : 'text-[#292D32] bg-[#F4AB4D] hover:text-white',
                            'rounded-md px-6 py-3 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-[#292D32] p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-[#f14850] focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-[#292D32] text-sm focus:outline-none ring-1 ring-[#f14850] ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="my-0 w-[150px] justify-center"
                          src={ImageLogo}
                          alt="Burguer Queen"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Perfil
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Cerrar sesión
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

          </>
        )}

      </Disclosure>
    
      <div className='flex justify-center bg-[#292D32]'>
        {/* <ClientInput /> */}
        <ClientInput onClientNameChange={handleClientNameChange} />                   
        <TableSelect />
      </div>
      <ProductsList products={products} onQuantityChange={handleAddToOrder} onSendToKitchen={handleSendToKitchen}/>
    </>

  );
};

export default BreakfastLunchButtons;

