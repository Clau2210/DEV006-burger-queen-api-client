import { instance } from "./base.api";
import { Product }  from "../components/waiter/product";

const endpoint = "products";

export const searchProducts = async (type = 'Desayuno'): Promise<Product[]> => {
  try {
    const token = localStorage.getItem("accessToken") || '';
    console.log('tokem', token);
    const response = await instance.get<Product[]>(endpoint + `?type=${type}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error fetching products from API: " + error.message);
    }
    throw new Error("Error fetching products from API: Unknown error occurred");
  }
};
