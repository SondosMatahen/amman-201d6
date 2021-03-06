/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
 
 // for (var i in Product.allProducts) {
    for (var i=0 ; i<Product.allProducts.length ; i++){
     
      var option = document.createElement('option');
      option.textContent=Product.allProducts[i].name;
      selectElement.appendChild(option);
     // cart.items.push(Product.allProducts[i].name);
      
    }

 // }
 console.log(cart)

}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
 //event.preventDefult();
 event.preventDefault();
//location.preventDefult();
  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}


// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var selectQuan = document.getElementById('quantity').value;
  var selectElementValue=document.getElementById('items').value;
  cart.addItem(selectElementValue, selectQuan )
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var itemCount =document.getElementById('itemCount')
 
  itemCount.textContent='    '+cart.items.length;
  
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var cartPreview= document.getElementById('cartContents');
  var selectElementValue=document.getElementById('items').value;
  var p =document.createElement('p')
  var quantity = document.getElementById('quantity').value
  p.textContent='this is the product  '+ selectElementValue +'  and this is the number  '+quantity;
  cartPreview.appendChild(p);



  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process


// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
