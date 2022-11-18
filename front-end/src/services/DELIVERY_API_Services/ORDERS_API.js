import * as axios from 'axios';

export const updateStatusOrderApi = async (id, status) => {
  try {
    const data = await axios.put((`${process.env.REACT_APP_BACKEND}/sales/${id}`), {
      status,
    });

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getSellerOrdersApi = async (id) => {
  try {
    const data = await axios(`${process
      .env.REACT_APP_BACKEND}/sales/seller/${id}/orders`);

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};
