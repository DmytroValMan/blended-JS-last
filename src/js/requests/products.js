import apiInstance from '../services/api';

export const fetchProducts = async () => {
  try {
    const { data } = await apiInstance.get('/products');
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
