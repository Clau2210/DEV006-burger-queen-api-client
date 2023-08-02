import React, { useEffect, useState } from "react";
import ImageLogo from "../../assets/images/BQueenLogoPantallas.png";
import { getOrderById, Order } from "../../api/order";
import '@fontsource/atma'
import '@fontsource/amiko';

const Kitchen: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getOrderById()
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-[#292D32]">
      <div className="flex justify-end">
        <img
          className="mx-10 w-[200px] justify-center"
          src={ImageLogo}
          alt="Burguer Queen"
        />
      </div>
      {orders ? (
        <>
          {orders.map((order) => (
            <div className="h-60 m-10 p-8 bg-[#6C7075] flex flex-col rounded-md text-white font-['Amiko'] text-sm " key={order.id}>
              <div>
                Aquí la orden de: {order.client}
                <br />
                Ticket: #{order.id}
                <h1>Productos: </h1>
                {order.products.map((product)=>(
                  <div key={product.product.id}>
                    <p>{product.qty}  {product.product.name} </p>
                    
                  </div>
                ))}

                <button className=" ml-60 rounded-md border border-transparent bg-[#EE4D39] px-6 py-3 text-base text-white shadow-sm hover:bg-[#F4AB4D] font-[atma] font-bold">
                  Por Entregar
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Cargando ordenes...</p>
      )}
    </div>
  );
};

export default Kitchen;
