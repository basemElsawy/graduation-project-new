'use strict';
let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');
let shoppingCart = document.querySelector('.shopping-cart');
let cartBtn = document.querySelector('.cart-btn');
let merchCounter = document.getElementById('merch-count');
let prices = document.querySelectorAll('.price-tags');
let products = document.querySelectorAll('.container');
let addToCartBtn = document.querySelectorAll('.add-cart');
let sideCheckoutMenu = document.querySelector('.side-bar');
let closeBtn = document.querySelector('.close-sidebar');
let chosenMerch = document.querySelector('chosen-merch');
let cartItems = document.getElementById('chosen-merch');
let removeBtn = document.querySelectorAll('.remove-btn');
let merchTotal = document.querySelector('.merch-total');
let fees = document.querySelector('.fees');
//-------------------========== VARIABLES =========----------------

merchCounter.innerText = Number(merchCounter.innerText);
let addItemId = 0;
let counter = 1;
//------------============== MERCH FUNCTIONALITY =========-------------

addToCartBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    merchFunctionalty(idx);

    merchCounter.innerText++;
  });
});

function merchFunctionalty(idx) {
  let productsParent = products[idx].parentElement;
  let productsNode = products[idx];
  let clone = productsNode.cloneNode(true);
  let cloneAddCart = clone.childNodes[14];
  let cloneRemoveItem = clone.childNodes[12];
  document.getElementById('chosen-merch').append(clone);

  clone.style.transform = 'scale(0.8)';
  clone.style.width = '100%';
  clone.style.marginBottom = '-50px';
  clone.style.marginTop = '-25px';
  clone.style.fontSize = '1.5rem';
  cloneAddCart.style.display = 'none';
  cloneRemoveItem.style.display = 'flex';
  cloneRemoveItem.style.justifyContent = 'center';
  cloneRemoveItem.style.width = '100%';
  cloneRemoveItem.style.color = '#ff6b7a';
}
function merchTotalFunc(idx) {
  merchTotal.innerText =
    Number(merchTotal.innerText) + Number(prices[idx].textContent);
}
removeBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {});
});
cartBtn.addEventListener('click', () => {
  sideCheckoutMenu.style.width = '30%';
  shoppingCart.style.marginRight = '30%';
  // shoppingCart.style.textAlign = 'left';
});

closeBtn.addEventListener('click', () => {
  sideCheckoutMenu.style.width = '0%';
  shoppingCart.style.marginRight = '0%';
});

//---------================= SCROLLING FUNCTIONALITY=======-------------------
document.addEventListener('DOMContentLoaded', function (event) {
  window.onscroll = function () {
    scrollFunction();
  };
  sideCheckoutMenu.style.width = '0%';
});

let scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.boxShadow = '0px 2px 40px 2px black';
    logo.style.transform = 'scale(1)';
    navbar.style.transform = 'scale(1)';
  } else {
    navbar.style.transform = 'scale(1.2)';
    logo.style.transform = 'scale(1.2)';
    header.style.boxShadow = 'none';
  }
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    // shoppingCart.style.visibility = 'visible';
    header.style.borderRadius = '0px 0px 10px 10px';
    header.style.marginRight = '10px';
    header.style.marginLeft = '10px';
  } else {
    // shoppingCart.style.visibility = 'hidden';
    header.style.borderRadius = '0px 0px 0px 0px';
    header.style.marginRight = '0px';
    header.style.marginLeft = '0px';
  }
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    cartBtn.style.visibility = 'visible';
    shoppingCart.style.visibility = 'visible';
  } else {
    cartBtn.style.visibility = 'hidden';
    shoppingCart.style.visibility = 'hidden';
  }
  if (
    document.body.scrollTop > 305 ||
    document.documentElement.scrollTop > 305
  ) {
    shoppingCart.style.transform = 'scale(1)';
    shoppingCart.style.borderRadius = '10px 0px 0px 10px';
  } else {
    shoppingCart.style.transform = 'scale(0.05)';
    shoppingCart.style.borderRadius = '10px';
  }
};
