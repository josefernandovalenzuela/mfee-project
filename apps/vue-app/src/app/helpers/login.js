import capstoneApi from '../api/capstoneApi';

export const postLogin = async (login) => {
  let status;
  await capstoneApi
    .post('/auth/login', login)
    .then(({ data }) => {
      status = true;
      localStorage.setItem('authToken', data.accessToken);
    })
    .catch((e) => {
      status = false;
      console.error('Error Post Login', e);
    });
  return status;
};
