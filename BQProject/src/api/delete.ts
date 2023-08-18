import axios from 'axios';

export async function deleteProduct(productId: number, token: string) {
  try {
    const response = await axios.delete(`http://localhost:8080/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Product deleted:', response.data);
  } catch (error) {
    console.error('Error deleting product:', error.message);
  }
}
