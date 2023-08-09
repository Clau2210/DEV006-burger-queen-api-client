import { useState, useEffect } from "react";
import product from "./product";

type ProductItemProps = {
  name: string;
  price: number;
  quantity: number;
  image: string;
  
  onChangeQuantity?: (quantity: number) => void;
  key: React.Key;
};

const ProductItem: React.FC<ProductItemProps> = (props) => {
  const { name, price, image, onChangeQuantity } = props;
  const [quantity, setQuantity] = useState(props.quantity | 0);

  const addOne = () => {
    setQuantity(quantity + 1);
  };

  const substractOne = () => {
    if (quantity - 1 >= 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    console.log("quantity", quantity);
    if (onChangeQuantity) {
      onChangeQuantity(quantity);
    }
  }, [quantity]);

  return (
    // <>
    //   <div className="grid-rows-3 p-4 m-5 text-white ">
    //     {name}
    //     <br />$ {price}
    //     <br />
    //     <button
    //       className="m-3 p-2 bg-[#EE4D39] cursor-pointer "
    //       onClick={substractOne}
    //     >
    //       -
    //     </button>
    //     {quantity}
    //     <button
    //       className="m-3 p-2 bg-[#EE4D39] cursor-pointer"
    //       onClick={addOne}
    //     >
    //       +
    //     </button>
    //   </div>
    // </>
    <>
  <div className="grid grid-cols-2 gap-4 p-4 m-5 text-white ">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img
        src={image}
        alt={`${name} Image`}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="grid-rows-3">
      {name}
      <br />$ {price}
      <br />
      <button
        className="m-3 p-2 bg-[#EE4D39] cursor-pointer "
        onClick={substractOne}
      >
        -
      </button>
      {quantity}
      <button
        className="m-3 p-2 bg-[#EE4D39] cursor-pointer"
        onClick={addOne}
      >
        +
      </button>
    </div>
  </div>
</>
  );
};

export { ProductItem };
