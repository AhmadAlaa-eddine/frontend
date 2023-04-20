import axios from 'axios';

const BASE_URL = 'http://example.com/api/users';

export const getUserById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const updateUser = async (id, updates) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updates);
  return response.data;
};
