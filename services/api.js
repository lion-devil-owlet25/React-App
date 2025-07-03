import axios from 'axios';

const API = axios.create({
  baseURL: 'https://d32neyt9p9wyaf.cloudfront.net/api/v3',
});

export const sendOTP = (mobile) => API.post('/otp-send', { mobile });
export const loginCheck = (mobile) => API.post('/login', { mobile });
export const registerUser = (data) =>
  API.post('/register', data, { headers: { 'Content-Type': 'multipart/form-data' } });
export const fetchProfile = (user_id, token) =>
  API.get(`/post-details?user_id=${user_id}`, { headers: { Authorization: `Bearer ${token}` } });
