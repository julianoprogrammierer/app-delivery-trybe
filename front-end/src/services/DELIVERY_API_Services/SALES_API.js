import * as axios from 'axios';

const SALES_ROUTE_MAIN = 'http://localhost:3001/sales';

export const confirmSaleApi = async (saleObj, products, token) => {
  try {
    const { data: { id } } = await axios.post((`${SALES_ROUTE_MAIN}/customer`), {
      saleObj,
      products,
    }, {
      headers: {
        Authorization: token,
      },
    });

    return id;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getSaleById = async (id) => {
  try {
    const { data } = await axios.get((`${SALES_ROUTE_MAIN}/${id}`));
    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const listSalesWithFullInfoApi = async (id) => {
  try {
    const { data } = await axios(`${SALES_ROUTE_MAIN}/customer/${id}`);

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getAllSalesOfPerson = async (id) => {
  try {
    const data = await axios.get(`${SALES_ROUTE_MAIN}/customer/${id}/orders`);

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};
