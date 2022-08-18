// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  console.log(price, quantity);

  let pricevalue = price.innerText;
  let quantityvalue = quantity.value;

  console.log(pricevalue, quantityvalue);

  let subtotal = pricevalue * quantityvalue;
  console.log(subtotal);

  product.querySelector('.subtotal span').innerText = subtotal;

  console.log(subtotal);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // ITERATION 2
  //... your code goes here

  let productsInTable = document.getElementsByClassName('product');
  let indProduct;
  let total = 0;
  console.log(productsInTable);
  console.log(productsInTable.length);

  for (let i = 0; i < productsInTable.length; i++) {
    indProduct = document.getElementsByClassName('product')[i];
    total += updateSubtotal(indProduct);
  }

  // ITERATION 3
  //... your code goes here
  console.log(total);
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
