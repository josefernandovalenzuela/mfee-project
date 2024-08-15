import axios from 'axios';

const capstoneApi = axios.create({
  baseURL: 'https://test.neuraac.com/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }
});


export default capstoneApi;
