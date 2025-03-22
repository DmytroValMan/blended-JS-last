import './styles/normalize.css';
import './styles/index.css';

import {
  createMarkupProducts,
  createMarkupProductById,
} from './js/services/markupService';
import { fetchProducts, getProductById } from './js/requests/products';

const allProducts = document.getElementById('allProducts');
const singleProductForm = document.querySelector('#singleProductForm');
const singleProduct = document.getElementById('singleProduct');

const addProductToPage = async () => {
  const result = await fetchProducts();
  console.log('🚀 ~ addProductToPage ~ result:', result);

  const markup = createMarkupProducts(result.products);
  allProducts.insertAdjacentHTML('beforeend', markup);
};

// addProductToPage();

// fetchProducts().then(console.log);

singleProductForm.addEventListener('submit', handleSubmitSingleForm);
async function handleSubmitSingleForm(event) {
  event.preventDefault();
  const id = event.currentTarget.elements.id.value;
  const product = await getProductById(id);
  const markup = createMarkupProductById(product);
  singleProduct.innerHTML = '';
  singleProduct.insertAdjacentHTML('beforeend', markup);
}
