import * as axios from 'axios';

const USERS_ROUTE_MAIN = `${process.env.REACT_APP_BACKEND}/users`;

export const listSellersApi = async () => {
  try {
    const { data } = await axios(`${process.env.REACT_APP_BACKEND}/users/sellers`);

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
    const result = await axios.delete(`${USERS_ROUTE_MAIN}/${id}`, { data: { token } });
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const confirmUser = async (token) => {
  try {
    const data = await axios.post(`${USERS_ROUTE_MAIN}/verify`, {}, {
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
