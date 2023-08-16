import { instance } from "./base.api";

const endpoint = "orders"; 

export async function updateOrderStatus(orderId: number, status: string): Promise<void> {
  try {
    const token = localStorage.getItem("accessToken") || '';
    await instance.patch(`${endpoint}/${orderId}`, { status }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`Order ${orderId} updated to status: ${status}`);
  } catch (error) {
    console.error(`Error updating order ${orderId} status:`, error.message);
    throw error;
  }
}
