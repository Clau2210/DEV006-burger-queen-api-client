import React, { useEffect, useState } from "react";
import { getAllOrders, Order } from "../../api/order";
import "@fontsource/atma";
import "@fontsource/amiko";
import { OrderContainer } from "./OrderContainer";
import BaseLayout from "../core/BaseLayout";
import { updateOrderStatus } from "../../api/orderswaiter";

const Kitchen: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getAllOrders('status=pending')
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

  const handleReadyOrder = (orderId: number) => {
    console.log("handleReadyOrder")
    updateOrderStatus(orderId, 'delivered').then(()=>{
      setOrders(orders.filter((order)=>orderId != order.id))
    }).catch(()=>{
      console.log('error al guardar')
    })
  }

  return (
    <BaseLayout>
      <div className="flex flex-col min-w-[60%]">
        {orders ? (
          <>
            {orders.map((order) => (
              <OrderContainer order={order} key={order.id} showCheck={true} onClick={() => handleReadyOrder(order.id)} buttonLabel={"Por Entregar"}/>
            ))}
          </>
        ) : (
          <p>Cargando ordenes...</p>
        )}
      </div>
    </BaseLayout>
  );
};

export { Kitchen };
