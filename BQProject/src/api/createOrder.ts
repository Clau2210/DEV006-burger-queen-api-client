import axios from 'axios'
import {OrderProduct } from '../api/order'


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






