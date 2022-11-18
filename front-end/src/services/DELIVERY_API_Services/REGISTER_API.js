import * as axios from 'axios';

const REGISTER_ROUTE_MAIN = `${process.env.REACT_APP_BACKEND}/register`;

const postRegisterApi = async (data) => {
  try {
    const result = await axios.post((REGISTER_ROUTE_MAIN), {
      ...data,
    });
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export default postRegisterApi;
