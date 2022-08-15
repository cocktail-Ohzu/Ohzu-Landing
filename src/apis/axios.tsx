import axios from 'axios';

const BASE_URL = 'https://ohzu.xyz';

export const axiosRequest = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
