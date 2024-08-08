import capstoneApi from '../api/capstoneApi';

export const postRegister = async (register) => {
  let status = false;
  await capstoneApi
    .post('/auth/register', register)
    .then(() => {
      status = true;
    })
    .catch((e) => console.error('Error Post Register', e));

  return status;
};
