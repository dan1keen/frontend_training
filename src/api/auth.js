import axios from '@/api/axios';

const login = (credentials) => {
  return axios.post('/login', { credentials });
};

const logout = () => {
  return axios.post('/logout');
};

export default {
  login,
  logout,
};
