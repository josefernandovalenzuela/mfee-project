import axios from 'axios';

const capstoneApi = axios.create({
  baseURL: 'https://test.neuraac.com/api',
  headers: {
    Authorization: `Bearer`
  }
});

capstoneApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.setItem('authToken', '');
      this.$router.push('/login');
    }
    return Promise.reject(error);
  }
);

capstoneApi.interceptors.request.use((config) => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export default capstoneApi;
