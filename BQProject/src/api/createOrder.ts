import axios from 'axios'
import { Product }  from "../components/waiter/product";

export async function saveOrderToKitchen(products: Product[], selectedQuantities: number[], totalPrice: number) {
    try {
        const orderData = {
          products: products.map((product, index) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: selectedQuantities[index],
          })),
          totalPrice: totalPrice,
        };
        const response = await axios.post('http://localhost:8080/orders', orderData);

        // Aquí puedes manejar la respuesta del servidor si es necesario
        console.log('Order saved to kitchen:', response.data);
      } catch (error) {
        console.error('Error saving order to kitchen:', error.message);
      }
    }