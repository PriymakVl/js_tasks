const productSearch = document.getElementById('product-search');
const clearBtn = document.getElementById('clear');
const results = document.querySelector('.results-wrapper');
  
  let products = [
    'apples', 'bananas', 'grapefruit', 'kiwi', 'avocados', 
    'lettuce', 'tomatoes', 'cheese', 'bread', 'yogurt', 
    'peas', 'carrots', 'broccoli', 'beans', 'pizza',
    'pasta', 'rice', 'cereal', 'butter', 'milk',
    'eggs', 'onions', 'garlic', 'honey', 'soup',
    'salt', 'pepper', 'oregano', 'basil', 'paprika'
  ];

const createProduct = productName => {
    const  product = document.createElement('div');
    product.textContent = productName;
    product.className = 'product';
    results.appendChild(product);
}

const createProductList = () => {
  for (let product of products) {
    createProduct(product);
  }
}

const displayFiltered = () => {
  const filter = productSearch.value.toLowerCase();
  for (let i = 0; i < products.length; i++) {
    if (products[i].indexOf(filter) > -1) {
      createProduct(products[i]);
    }
  }
}  
  
productSearch.addEventListener('keyup', () => {
  results.innerHTML = '';
  displayFiltered();
});

  clearBtn.addEventListener('click', () => {
    productSearch.value = '';
    createProductList();
  });

createProductList();
