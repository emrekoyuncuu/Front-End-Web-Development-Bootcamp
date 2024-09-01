import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchStarships = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching starships:', error);
    throw error;
  }
};

export const fetchStarshipDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/starships/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching starship detail:', error);
    throw error;
  }
};