import * as axios from 'axios';

const PRODUCTS_ROUTE_MAIN = `${process.env.REACT_APP_BACKEND}/products`;

const listProductsApi = async () => {
  try {
    const result = await axios(`${PRODUCTS_ROUTE_MAIN}/customer`);
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export default listProductsApi;
