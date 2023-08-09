import BaseLayout from "../core/BaseLayout"
import { classNames } from "../core/utils";
import { ProductItem } from "./ProductItem";
import { useState, useEffect } from "react";
import { searchProducts } from '../../api/waiterBf';
import ProductsList, { Product } from './product';
import { format } from 'date-fns';
import ClientInput from "./client";
import TableSelect, { Table } from "./table";
import { saveOrderToKitchen } from "../../api/createOrder";
import { OrderProduct } from "../../api/order";

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavItem[] = [
  { name: 'Desayuno', href: '#', current: true },
  { name: 'Almuerzo', href: '#', current: false },
  //{ name: 'Cena', href: '#', current: false },
];

// type ProductItem = { qty: number, product: Product }


type ProductItemDictionary = {
  [key: number] : OrderProduct;
}

const getProductById = (products: Product[], id: number  ): Product | undefined => {
  const filteredProduct = products.filter((p) => p.id == id)

  if( filteredProduct.length==0){
    return undefined;
  }

  return filteredProduct[0];
} 


const Waiter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedProducts, setSelectedProducts] = useState<ProductItemDictionary>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [clientName, setClientName] = useState('');
  const [table, setTable] = useState<Table>({ id: 3, name: 'Mesa 3', avatar: ''})

  const buttons = () => {
    return (
      <>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'bg-[#EE4D39] text-[#292D32' : 'text-[#292D32] bg-[#F4AB4D] hover:text-white',
              'rounded-md px-6 py-3 text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleFilter(item.name) 
            }}
          >
            {item.name}
          </a>
        ))}
      </>
    )
  }

  const handleFilter = (type: string) => {
    console.log("type1: ", type);
    searchProducts(type)
      .then(response => setProducts(response))
      .catch(e => console.log(e));
  }

  const onHandleChangeQuantity = (quantity: number, productId: number) => {
    const selectedProductsTemp: ProductItemDictionary = { ...selectedProducts } 
    selectedProductsTemp[productId] = { qty: quantity, product: getProductById(products, productId) };

    setSelectedProducts(selectedProductsTemp);
  }

  const totalOrder = () : number => {
    return Object.values(selectedProducts).reduce((sum, value) => sum + value.qty*value.product.price, 0 )
  }

  useEffect( () => {
    console.log('primer render');
    searchProducts()
    .then((response) => {
      console.log('Esta es una respuesta a useEffect');
      setProducts(response);
    })
    .catch(() => {
      console.log('error');
    });
  }, []);

  const selectedProductsValues = () => {
    return Object.entries(selectedProducts).map(([, value]) => {
      return value; 
    }).filter((items) => items.qty > 0);
  }

  const handleCreateOrder = async () : void => {
    
    console.log("Creando orden: ", clientName);
    const filteredProductsItems = selectedProductsValues();
    const token = localStorage.getItem('accessToken') || '';
    const orderData = {
      userId: 1, // Replace with the correct user ID
      client: clientName,
      products: filteredProductsItems,
      status: 'pending',
      table: table?.id | 3,
      dataEntry: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    };

    try {
      // Asegúrate de pasar los argumentos requeridos a la función saveOrderToKitchen
      await saveOrderToKitchen(orderData, token);
      console.log('Order created');
      setIsModalOpen(true); 
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle error, show an error message, etc.
    }
    
  }

  return (
    <BaseLayout 
      buttons={buttons}
    >
      <div className="flex flex-col">
        <div className="flex">
          <ClientInput onClientNameChange={(name) => {
            console.log('client Name: ', name);
            setClientName(name)
          }}/>
          <TableSelect onChangeTable={(tableParam) => {
            console.log('selected Table: ', tableParam)
            setTable(tableParam);
          }}/>
        </div>
        <div className="flex flex-col">
          <div>
            {products.map(((item) => 
              <ProductItem 
                key={item.id} 
                name={item.name} 
                price={item.price} 
                quantity={selectedProducts[item.id]?.qty | 0}
                onChangeQuantity={(quantity: number) => onHandleChangeQuantity(quantity, item.id)
                }
                image={item.image}
                />  
            ))}         
          </div>
          <div className="flex flex-col rounded-md bg-[#6C7075] m-6 p-5 text-white min-w-[50%]">
            {selectedProductsValues().map(({qty, product}) => <div key={product.id}>
              {qty}    {product.name}   ${product.price*qty}
            </div>) }

            <div className="my-10">
              Total: ${totalOrder()}
            </div>

            
            <button 
              className="align-center rounded-md border border-transparent bg-[#EE4D39] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#F4AB4D]"
              onClick={handleCreateOrder}
              >
              Enviar a cocina
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-10 ${
          isModalOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsModalOpen(false)}
      >
        <div className="fixed inset-0 bg-black opacity-30 items-center justify-center"></div>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className="text-lg font-semibold mb-4">
              ¡Orden creada con éxito!
            </p>
            <p>Tu orden ha sido enviada a la cocina.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => setIsModalOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>

    </BaseLayout>
  )
}

export default Waiter;