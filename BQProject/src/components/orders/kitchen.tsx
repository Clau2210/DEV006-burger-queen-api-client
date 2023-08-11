import React, { useEffect, useState } from "react";
import ImageLogo from "../../assets/images/BQueenLogoPantallas.png";
import { getOrderById, Order } from "../../api/order";
import "@fontsource/atma";
import "@fontsource/amiko";
import { OrderContainer } from "./OrderContainer";

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
            <OrderContainer order={order} key={order.id} />
          ))}
        </>
      ) : (
        <p>Cargando ordenes...</p>
      )}
    </div>
  );
};

export default Kitchen;
