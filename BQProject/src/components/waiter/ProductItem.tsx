import { useState, useEffect } from 'react';

type ProductItemProps = {
  name: string,
  price: number,
  quantity: number,
  onChangeQuantity?: (quantity: number) => void,
  key: React.Key
}


const ProductItem: React.FC<ProductItemProps>  = (props) => {
  const { name, price, onChangeQuantity } = props;
  const [ quantity, setQuantity ] = useState(props.quantity | 0);

  const addOne = () => {    
    setQuantity(quantity+1);

  }

  const substractOne = () => {
    if(quantity-1 >= 0) {
      setQuantity(quantity-1);
    }
  }

  useEffect(() => {
    console.log('quantity', quantity)
    if(onChangeQuantity){
      onChangeQuantity(quantity);
    }
  }, [quantity])

  return (
    <div className='p-4 m-5 text-white bg-red-500 '>
      {name}
      <br />
      $ {price}
      <br />      
      <button className='m-3 p-2 bg-yellow-400 cursor-pointer' onClick={substractOne}>-</button>
      {quantity}
      <button className='m-3 p-2 bg-yellow-400 cursor-pointer' onClick={addOne}>+</button>
    </div>
  )
}

export { ProductItem };