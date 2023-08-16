import React, { useState, useEffect } from "react";
import { getAllOrders, Order } from "../../api/order";
import BaseLayout from "../core/BaseLayout"
import { OrderContainer } from "./OrderContainer";
import { updateOrderStatus } from "../../api/orderswaiter";

const OrderWaiter: React.FC = () => {

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getAllOrders('status=delivered')
      .then((data) => {
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          console.error('Expected an array response but got:', data);
          setOrders([]);
        }
      })
      .catch((error) => {
        console.error(error);
        setOrders([]);
      });
  }, []);

  const handleReadyOrder = (orderId: number) => {
    console.log("handleReadyOrder")
    updateOrderStatus(orderId, 'done').then(()=>{
      setOrders(orders.filter((order)=>orderId != order.id))
    }).catch(()=>{
      console.log('error al guardar')
    })
  }

  return (
    <BaseLayout>
      <div className="flex flex-col min-w-[60%]">
        {orders === null ? (
          <p>Cargando ordenes...</p>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <OrderContainer showCheck={false} order={order} key={order.id} onClick={()=>handleReadyOrder(order.id)} buttonLabel={"Listo"}/>
          ))
        ) : (
          <p>No hay órdenes entregadas.</p>
        )}
      </div>
    </BaseLayout>
  )
}

export { OrderWaiter };
