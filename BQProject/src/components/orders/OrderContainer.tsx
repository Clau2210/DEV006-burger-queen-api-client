import { useState } from "react";
import { Order } from "../../api/order";
import { Button } from "../core/Button";
import { CheckBox } from "../core/CheckBox";

type OrderContainerProps = {
  order: Order,
  showCheck: boolean;
  onClick: () => void;
  buttonLabel:string;
};

const OrderContainer = ( {order, showCheck = true, onClick, buttonLabel} : OrderContainerProps ) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const handleCheckboxChange = (productId: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedProducts(prevState => [...prevState, productId]);
    } else {
      setSelectedProducts(prevState => prevState.filter(id => id !== productId));
    }
  }

  const allProductsSelected = selectedProducts.length === order.products.length || !showCheck;

  const handleReadyOrder = () => {
    onClick();
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
        <h1>Productos Listos: </h1>
        {order.products.map((product) => (
          <div key={product.product.id}>
            {showCheck && <CheckBox 
              label={`${product.qty} ${product.product.name}`}               
              onChange={checked => handleCheckboxChange(product.product.id, checked)} 
            /> }
            {!showCheck && <label className="m-5 p-5">{`${product.qty} ${product.product.name}`}</label>}
          </div>
        ))}           
        <Button label={buttonLabel} disabled={!allProductsSelected} onClick={handleReadyOrder}/>        
      </div>
    </div>
  )
}

export {
  OrderContainer
}
