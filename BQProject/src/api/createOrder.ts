import axios from 'axios'
import { Product }  from "../components/waiter/product";
import {OrderProduct } from '../api/order'

// export async function saveOrderToKitchen(products: Product[], token: string) {
//     try {
//         const orderData = {
//           products: products.map((product) => ({
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             qty: product.qty,
//           })),
//           totalPrice: products.reduce((total, product) => total + product.price * product.qty, 0),
//         };
//         const response = await axios.post('http://localhost:8080/orders', orderData, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         // Aquí puedes manejar la respuesta del servidor si es necesario
//         console.log('Order saved to kitchen:', response.data);
//       } catch (error) {
//         console.error('Error saving order to kitchen:', error.message);
//       }
//     }

export async function saveOrderToKitchen(orderData: {
  userId: number;
  client: string;
  products: OrderProduct[];
  status: string;
  dataEntry: string;
}, token: string) {
  try {
    const response = await axios.post('http://localhost:8080/orders', orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Order saved to kitchen:', response.data);
  } catch (error) {
    console.error('Error saving order to kitchen:', error.message);
  }
}






