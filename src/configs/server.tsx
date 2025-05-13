import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.DEV ? '' : 'http://01.taehyeongkim.shop',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
