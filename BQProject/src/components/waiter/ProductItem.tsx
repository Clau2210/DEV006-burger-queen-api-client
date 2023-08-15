import { useState, useEffect } from 'react';
import { Button } from '../core/Button';
type ProductItemProps = {
  name: string,
  price: number,
  quantity: number,
  onChangeQuantity?: (quantity: number) => void,
  key: React.Key,
  image:string
}
const ProductItem: React.FC<ProductItemProps>  = (props) => {
  const { name, price, image, onChangeQuantity } = props;
  const [ quantity, setQuantity ] = useState(props.quantity | 0);

  useEffect(() => {
    setQuantity(props.quantity || 0);
  }, [props.quantity]);
  
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
    <div className='flex gap-4 p-4 m-5 text-white'>
      <div className='h-24 w-24 flex self-center overflow-hidden rounded-md border border-gray-200'>
        <img
          src={image}
          alt={`${name} Image`}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className='inline content-center'>
        {name}
        <br />
        $ {price}
        <br />
      </div>
      <div className='inline-flex items-center '>
        <Button label='-' onClick={substractOne} className='m-3 p-2' overrideDefault={true} />
        {quantity}
        <Button label='+' onClick={addOne} className='m-3 p-2' overrideDefault={true} />
        </div>
    </div>
  )
}
export { ProductItem };












