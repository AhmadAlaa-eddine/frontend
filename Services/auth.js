import axios from 'axios';

const BASE_URL = 'http://example.com/api/auth';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Invalid username or password');
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to logout');
  }
};
