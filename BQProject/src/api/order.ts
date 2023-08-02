import { instance } from "./base.api";

interface ProductDetail {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}



export interface OrderProduct {
  qty: number;
  products: ProductDetail;
}

export interface Order {
  id: number;
  userId: number;
  client: string;
  product: OrderProduct[];
  status: string;
  dataEntry: string;
  dateProcessed?: string;
}

const endpoint = "orders";

export async function getOrderById(): Promise<Order[]> {
  try {
    const token = localStorage.getItem("accessToken") || '';
    console.log('tokem', token);
    const response = await instance.get<Order[]>(`${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const order = response.data;
    console.log('Pedido recuperado:', order);
    return order;
  } catch (error) {
    console.error('Error al recuperar el pedido:', error.message);
    throw error;
  }
}

