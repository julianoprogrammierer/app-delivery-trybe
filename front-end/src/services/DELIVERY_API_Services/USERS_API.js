import * as axios from 'axios';

const USERS_ROUTE_MAIN = 'http://localhost:3001/users';

export const listSellersApi = async () => {
  try {
    const { data } = await axios('http://localhost:3001/users/sellers');

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const saveNewUserApi = async (userDTO, token) => {
  try {
    const result = await axios.post((USERS_ROUTE_MAIN), {
      ...userDTO,
    }, {
      headers: {
        Authorization: token,
      },
    });

    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const removeUserApi = async (id, token) => {
  try {
    const result = await axios.delete(`http://localhost:3001/users/${id}`, { data: { token } });
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const confirmUser = async (token) => {
  try {
    const data = await axios.post('http://localhost:3001/users/verify', {}, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getUserListApi = async (token) => {
  try {
    const result = await axios.get((USERS_ROUTE_MAIN), {
      headers: {
        Authorization: token,
      },
    });

    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};
