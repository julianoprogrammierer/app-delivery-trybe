import * as axios from 'axios';

const LOGIN_ROUTE_MAIN = `${process.env.REACT_APP_BACKEND}/login`;

const postLoginApi = async (data) => {
  try {
    const result = await axios.post((LOGIN_ROUTE_MAIN), {
      ...data,
    });

    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export default postLoginApi;
