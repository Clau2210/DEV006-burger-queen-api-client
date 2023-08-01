import { instance } from "./base.api";
import { Product }  from "../components/waiter/product";

const endpoint = "products";

export const searchProducts = async (): Promise<Product[]> => {
  try {
    const token = localStorage.getItem("accessToken") || '';
    console.log('tokem', token);
    const response = await instance.get<Product[]>(endpoint, {
      headers: {
        // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2OTAzMTM3NjcsImV4cCI6MTY5MDMxNzM2Nywic3ViIjoiMSJ9.8Hbw5KFKeKpgz37vyLauARTrEiB0nRZ9_lnZOZ2ZsAM"
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
