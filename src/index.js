import './styles/normalize.css';
import './styles/index.css';

import { createMarkupProducts } from './js/services/markupService';
import { fetchProducts } from './js/requests/products';

const allProducts = document.getElementById('allProducts');

const addProductToPage = async () => {
  const result = await fetchProducts();
  console.log('🚀 ~ addProductToPage ~ result:', result);

  const markup = createMarkupProducts(result.products);
  allProducts.insertAdjacentHTML('beforeend', markup);
};

addProductToPage();

// fetchProducts().then(console.log);
