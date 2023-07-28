import React, { useEffect, useState } from 'react';



export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  type: string;
  dateEntry: string;
  quantity: number;
  href: string;
}

interface ProductsProps {
  products: Product[

  ];
}



const ProductsList: React.FC<ProductsProps> = ({ products }) => {
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
}, [products, selectedQuantities]);


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
                        <p className="text-white">Total pedido: {product.price * selectedQuantities[index]}</p>
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
          <p>{totalPrice.toFixed(0)}</p>
        </div>
        <p className="mt-0.5 text-sm text-white"></p>
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
};

export default ProductsList;