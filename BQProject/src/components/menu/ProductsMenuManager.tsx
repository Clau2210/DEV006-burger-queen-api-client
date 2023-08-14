/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import BaseLayout from "../core/BaseLayout";
import { searchProducts } from "../../api/waiterBf";
import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { deleteProduct } from "../../api/delete";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
  }

  interface Props {
    deletedProductIds: number[];
    onDeleteProduct: (productId: number) => void;
  }

  const ProductsMenuManager: React.FC<Props> = ({ onDeleteProduct }) => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
      const desayunoProducts = searchProducts('Desayuno');
      const almuerzoProducts = searchProducts('Almuerzo');
      Promise.all([desayunoProducts, almuerzoProducts])
        .then(([desayunoData, almuerzoData]) => {
          setProducts([...desayunoData, ...almuerzoData]);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const handleDeleteProduct = (productId: number) => {
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    };

    const handleDeleteClick = async (product: Product) => {
      const token = localStorage.getItem('accessToken') || '';
      const confirmation = window.confirm(`¿Estás seguro de que deseas eliminar el producto "${product.name}"?`);
  
      if (confirmation) {
        await deleteProduct(product.id, token);
        onDeleteProduct(product.id);
        handleDeleteProduct(product.id);
      }
    };
 

    return (
      <BaseLayout>     
        <h2 className="text-lg font-semibold text-white">PRODUCTOS</h2>
      <ul role="list" className="divide-y divide-gray-100 mt-10">
      {products.map((product, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <img
                className="mx-20 h-16 w-16 flex-none rounded-full bg-gray-50"
                src={product.image}
                alt={`Producto ${product.name}`}
              />
              <div className="min-w-0 flex-auto">
                <p className="mt-1 truncate text-xs leading-5 text-[#f8fafc]">ID: {product.id}</p>
                <p className="text-sm font-semibold leading-6 text-[#f8fafc]">{product.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-[#f8fafc]">$ {product.price}</p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-xs leading-5 text-[#f8fafc]">Tipo: {product.type}</p>
              <p className="mt-1 text-xs leading-5 text-[#f8fafc]">Fecha de Entrada: {product.dateEntry}</p>
              <div className="flex gap-x-2">
          <AiOutlinePlus size={23} onClick={() => handleAddClick(product)} />
          <AiOutlineEdit size={23} onClick={() => handleEditClick(product)} />
          <AiOutlineDelete size={23} onClick={() => handleDeleteClick(product)} />
        </div>
            </div>
          </li>
        ))}
      </ul>
      </BaseLayout>
    );
  };
  
 



export default ProductsMenuManager;