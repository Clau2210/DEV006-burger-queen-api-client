/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/ban-types */
// export default function WaiterBreakfast(){
//     return <h1>Waiter</h1>;
// }
import React, { useState, useEffect, Fragment } from 'react';
import { Disclosure, Menu, Transition, Listbox } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ImageLogo from '../../assets/images/BQueenLogoPantallas.png'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { searchProducts } from '../../api/waiterBf';
import { token } from '../login/login';

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  type: string;
  dateEntry: string;
  quantity: number;
}




const navigation: NavItem[] = [
  { name: 'Desayuno', href: '#', current: true },
  { name: 'Almuerzo y cena', href: '#', current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

// Definimos el tipo de props que nuestro componente va a aceptar. En este caso, no tiene ninguna prop, así que es un objeto vacío.
type BreakfastLunchButtonsProps = {};

// Creamos el componente usando una función de flecha. Nota el uso de FC (Funcional Component) de React.
const BreakfastLunchButtons: React.FC<BreakfastLunchButtonsProps> = () => {
  // Estos son los handlers para los eventos de clic en los botones
  const handleBreakfastClick = () => {
    console.log('Desayuno');
  };



  const handleLunchClick = () => {
    console.log('Lunch');
  };

  const people = [
    {
      id: 1,
      name: 'Mesa 1',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
    {
      id: 2,
      name: 'Mesa 2',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
    {
      id: 3,
      name: 'Mesa 3',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
    {
      id: 4,
      name: 'Mesa 4',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
    {
      id: 5,
      name: 'Mesa 5',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
    {
      id: 6,
      name: 'Mesa 6',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
    {
      id: 7,
      name: 'Mesa 7',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
    {
      id: 8,
      name: 'Mesa 8',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
    {
      id: 9,
      name: 'Mesa 9',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
    {
      id: 10,
      name: 'Mesa 10',
      avatar:
        'https://e7.pngegg.com/pngimages/488/544/png-clipart-coffee-tables-round-table-wood-side-table-glass-angle.png',
    },
  ]
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Hamburger',
  //     href: '#',
  //     color: 'Salmon',
  //     price: '$10.00',
  //     quantity: 1,
  //     imageSrc: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
  //     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Medium Stuff Satchel',
  //     href: '#',
  //     color: 'Blue',
  //     price: '$5.00',
  //     quantity: 1,
  //     imageSrc: 'https://illustoon.com/photo/11612.png',
  //     imageAlt:
  //       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  //   },
  // ]

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    searchProducts()
    .then((response)=>{
      console.log('Esta es una respuesta a useEffect');
      console.log(response);
      setProducts(response);
    })
    .catch();
  }, []);
  


  function Client() {
    return (
      <div className='bg-[#292D32]'>
        {/* <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Cliente
      </label> */}
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
    )
  }



  function Table() {
    const [selected, setSelected] = useState(people[3])
    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            {/* <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Mesas</Listbox.Label> */}
            <div className="relative mt-2 bg-[#292D32]">
              <Listbox.Button className="relative w-100 ml-3 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-100 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {person.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}

      </Listbox>

    );
  }


  function Products({ products }: { products: Product[] }) {
    const [selectedQuantities, setSelectedQuantities] = useState<number[]>(Array(products.length).fill(0));
    const [totalPrice, setTotalPrice] = useState<number>(0);


    useEffect(() => {
      // let total = 0;
      const total = selectedQuantities.reduce((acc, quantity, index) => {
        return acc + quantity * products[index].price;
      }, 0);

      setTotalPrice(total);
    }, [selectedQuantities, products]);

      // Calcular el total inicial al cargar el componente
  useEffect(() => {
    const initialTotal = selectedQuantities.reduce((acc, quantity, index) => {
      return acc + quantity * products[index].price;
    }, 0);

    setTotalPrice(initialTotal);
  }, [products]);

  
    const handleQuantityChange = (index: number, value: number) => {
      // Copiar el array actual de selectedQuantities y actualizar la cantidad para el índice específico
      const updatedQuantities = [...selectedQuantities];
      updatedQuantities[index] = value;

      setSelectedQuantities(updatedQuantities);
    
    };

    return (
      <div className="flex flex-col overflow-y-scroll bg-[#292D32] shadow-xl px-[180px]" >
        <div className="overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-white">Productos</h2>
          </div>
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product, index) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-white">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                        <select id={`quantity-${index}`} className="rounded-md m-3 p-1 " value={selectedQuantities[index]} onChange={(e)=>
                          handleQuantityChange(index, Number(e.target.value))}
                          >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                        </select>
                          {/* <p className="text-white">Cantidad {selectedQuantities[index]}</p> */}
                          <p className="text-white">Total: {product.price * selectedQuantities[index]}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        {/* <p className="text-white">Cantidad {product.quantity}</p> */}
                        <div className="flex">
                          <button
                            type="button"
                            // className="font-medium text-[#EE4D39] hover:text-[#E22F19]"
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#E22f19] px-3 py-2 text-base font-medium text-white shadow-sm hover:bg-[#F4AB4D]"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-white">
            <p>Total:</p>
            {/* <p>$262.00</p> */}
            <p>{totalPrice.toFixed(0)}</p>
            {/* <p className="text-white">Total: {total}</p> */}
          </div>
          <p className="mt-0.5 text-sm text-white">Envío e impuestos calculados al finalizar la compra.</p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-[#EE4D39] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#F4AB4D]"
            >
              Enviar cocina
            </a>
          </div>
        </div>
      </div>
    );
  }


  return (
    <>
      <Disclosure as="nav" className="bg-[#292D32] py-10">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
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
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>

          </>
        )}

      </Disclosure>
      <div className='flex justify-center bg-[#292D32]'>
        <Client />
        <Table />
        
      </div>
      <Products products={products} />
    </>

  );
};

export default BreakfastLunchButtons;

