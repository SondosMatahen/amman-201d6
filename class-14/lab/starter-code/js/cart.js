/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
localStorage.clear();

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  for(var i=0 ; i < cart.items.length ; i++){
    var tr = document.createElement('tr');
    var td1= document.createElement('td');
    td1.innerHTML="<a href=# >x</a>";
    tr.appendChild(td1);
    var td2=document.createElement('td');
    td2.textContent= cart.items[i].product;
    tr.appendChild(td2);
    var td3=document.createElement('td');
    td3.textContent= cart.items[i].quantity;
    tr.appendChild(td3);
    table.appendChild(tr);

  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

 cart.removeItem()
 cart.saveToLocalStorage();
 renderCart();
  //table.deletRow()
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
