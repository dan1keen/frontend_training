import axios from 'axios';

axios.defaults.baseURL = 'http://medium_backend.test/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
