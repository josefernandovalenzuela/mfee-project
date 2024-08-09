import capstoneApi from '../api/capstoneApi';

export const createComment = async (comment, id) => {
  let status;
  await capstoneApi
    .post(`/posts/${id}/comments`, comment)
    .then(() => {
      status = true;
    })
    .catch((e) => {
      status = false;
      console.error('Error Create Comment', e);
    });

  return status;
};
