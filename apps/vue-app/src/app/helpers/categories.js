import capstoneApi from '../api/capstoneApi';

export const getCategories = async () => {
  let categories = [];

  await capstoneApi
    .get('/categories')
    .then(({ data }) => {
      categories = data;
    })
    .catch((e) => console.error('Error Get Categories', e));

  return categories;
};

export const createCategory = async (name) => {
  let status;

  await capstoneApi
    .post('/categories', name)
    .then(() => {
      status = true;
    })
    .catch((e) => {
      console.error('Error Create Category', e);
      status = false;
    });

  return status;
};

export const deleteCategory = async (id) => {
  let status;
  await capstoneApi
    .delete(`/categories/${id}`)
    .then(() => {
      status = true;
    })
    .catch((e) => {
      status = false;
      console.error('Error Delete Category', e);
    });

  return status;
};

export const updateCategory = async (category) => {
  let status;
  await capstoneApi
    .patch(`/categories/${category._id}`, category.name)
    .then(() => {
      status = true;
    })
    .catch((e) => {
      status = false;
      console.error('Error Update Category', e);
    });

  return status;
};
