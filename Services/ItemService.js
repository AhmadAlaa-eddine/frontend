import axios from 'axios';

const BASE_URL = 'http://example.com/api/items';

export const getItems = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getItemById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const createItem = async (item) => {
  const response = await axios.post(BASE_URL, item);
  return response.data;
};

export const updateItem = async (id, updates) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updates);
  return response.data;
};

export const deleteItem = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
