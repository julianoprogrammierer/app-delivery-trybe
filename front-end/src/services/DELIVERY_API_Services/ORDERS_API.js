import * as axios from 'axios';

export const updateStatusOrderApi = async (id, status) => {
  try {
    const data = await axios.put((`http://localhost:3001/sales/${id}`), {
      status,
    });

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getSellerOrdersApi = async (id) => {
  try {
    const data = await axios(`http://localhost:3001/sales/seller/${id}/orders`);

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};
