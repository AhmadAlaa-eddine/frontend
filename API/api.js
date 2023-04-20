const BASE_URL = "https://localhost:44355";

// Helper function to handle API errors
const handleErrors = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
};

// API functions
export const getItems = async () => {
  const response = await fetch(`${BASE_URL}/items`);
  return handleErrors(response);
};

export const getItem = async (id) => {
  const response = await fetch(`${BASE_URL}/items/${id}`);
  return handleErrors(response);
};

export const getGames = async () => {
  const response = await fetch(`${BASE_URL}/games`);
  return handleErrors(response);
};

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}/api/Movie`);
  return handleErrors(response);
};

export const getBooks = async () => {
  const response = await fetch(`${BASE_URL}/books`);
  return handleErrors(response);
};

export const getUserProfile = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/profile`);
  return handleErrors(response);
};

export const updateUserProfile = async (userId, profileData) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });
  return handleErrors(response);
};

export const getWishlist = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/wishlist`);
  return handleErrors(response);
};

export const addToWishlist = async (userId, itemId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/wishlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemId }),
  });
  return handleErrors(response);
};

export const removeFromWishlist = async (userId, itemId) => {
  const response = await fetch(
    `${BASE_URL}/users/${userId}/wishlist/${itemId}`,
    {
      method: "DELETE",
    }
  );
  return handleErrors(response);
};

export const searchItems = async (query) => {
  const response = await fetch(`${BASE_URL}/items?q=${query}`);
  return handleErrors(response);
};
