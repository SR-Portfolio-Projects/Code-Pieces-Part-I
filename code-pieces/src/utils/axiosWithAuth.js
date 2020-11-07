import axios from 'axios';
// 'http://localhost:5000/api'
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://code-pieces-api.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  });
};

