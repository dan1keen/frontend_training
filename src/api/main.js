import axios from '@/api/axios';

const getHomeInfo = () => {
  return axios.get('/home');
};

export default {
  getHomeInfo,
};
