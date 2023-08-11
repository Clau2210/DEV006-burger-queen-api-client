import { useState } from "react";
import { Order } from "../../api/order";
import { Button } from "../core/Button";
import { CheckBox } from "../core/CheckBox";

type OrderContainerProps = {
  order: Order,
};

const OrderContainer = ( {order} : OrderContainerProps ) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const handleCheckboxChange = (productId: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedProducts(prevState => [...prevState, productId]);
    } else {
      setSelectedProducts(prevState => prevState.filter(id => id !== productId));
    }
  }

  const allProductsSelected = selectedProducts.length === order.products.length;

  const handleReadyOrder = () => {
    console.log("handleReadyOrder")
  }

  return (
    <div
      className="m-10 p-8 bg-[#6C7075] flex flex-col rounded-md text-white font-['Amiko'] text-sm "
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
            <CheckBox 
              label={`${product.qty} ${product.product.name}`}               
              onChange={checked => handleCheckboxChange(product.product.id, checked)} 
            />
          </div>
        ))}           
        <Button label="Por Entregar" disabled={!allProductsSelected} onClick={handleReadyOrder}/>        
      </div>
    </div>
  )
}

export {
  OrderContainer
}
