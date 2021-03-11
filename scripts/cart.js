'use strict'

let carts = document.querySelectorAll('.cart-button');

const productPrice = document.querySelector('.product-price')
const productName = document.querySelector('.product-name');

let products = [
    {
        name: productName.textContent,
        tag: 'nikeshoe',
        price: productPrice.textContent,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', (e) =>{
        e.preventDefault();
        cartNumbers(products[i]);
    })
}

function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('#navbar-cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ){        
        localStorage.setItem('cartNumbers', productNumbers + 1);        
        document.querySelector('#navbar-cart span').textContent =
        productNumbers +1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#navbar-cart span').textContent =
         1;
    }
    
    setItems(product);
}

function setItems(product) {
    let cartItems = {
        [product.tag]: product
    };
    localStorage.setItem('productsInCart', JSON.stringify
    (cartItems[product.tag]));
    
    cartItems = localStorage.getItem('productsInCart');

    product.inCart = 1;
}

onLoadCartNumber();