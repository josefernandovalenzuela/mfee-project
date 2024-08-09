import capstoneApi from '../api/capstoneApi';

export const loginService = async (username, password) => {
  return await capstoneApi
    .post(`/auth/login`, { username, password })
    .then((res) => {
      console.log(res);
      localStorage.setItem('token', res.data.accessToken);
    })
    .catch((e) => {
      console.error(e);
      throw e.response.data.message;
    });
};

export const signUpService = async (username, password) => {
  return await capstoneApi
    .post(`/auth/register`, { username, password })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.error(e);
      throw e.response.data.message;
    });
};

export const logoutService = async () => {
  return await capstoneApi
    .post(`/auth/logout`, {})
    .then((res) => {
      console.log(res);
      localStorage.removeItem('token');
    })
    .catch((e) => {
      console.error(e);
      throw e.response.data.message;
    });
};
