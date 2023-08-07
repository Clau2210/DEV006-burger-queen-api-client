import React, { useEffect, useState } from "react";
import ImageLogo from "../../assets/images/BQueenLogoPantallas.png";
import { getOrderById, Order } from "../../api/order";
import "@fontsource/atma";
import "@fontsource/amiko";

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
            <div
              className="h-60 m-10 p-8 bg-[#6C7075] flex flex-col rounded-md text-white font-['Amiko'] text-sm "
              key={order.id}
            >
              <div>
                Aquí la orden de: {order.client}
                <br />
                Ticket: #{order.id}
                <br />
                Mesa: {order.table}
                <h1>Productos: </h1>
                {order.products.map((product) => (
                  <div key={product.product.id}>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input
                        id="checkbox-item-11"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        {product.qty} {product.product.name}
                      </label>
                    </div>
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
