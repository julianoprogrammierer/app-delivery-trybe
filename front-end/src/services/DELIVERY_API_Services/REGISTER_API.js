import * as axios from 'axios';

const REGISTER_ROUTE_MAIN = 'http://localhost:3001/register';

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
