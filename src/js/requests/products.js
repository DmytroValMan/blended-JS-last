import apiInstance from '../services/api';

export const fetchProducts = async () => {
  try {
    const { data } = await apiInstance.get('/products');
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async id => {
  try {
    const { data } = await apiInstance.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
