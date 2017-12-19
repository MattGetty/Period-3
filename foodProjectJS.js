window.onload=function()
{
	sessionStorage.clear();
	localStorage.clear();
};
var cartPrice = [];
function orderStrawberryJam(){
	var qty = document.getElementById('numberOfStrawberryJamsOrdered').value;
	var price = qty * 9.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i];
    //var text = document.createTextNode(cart[i]);
    //li.appendChild(text);
    //var itsTime = document.querySelectorAll('ul.className')[0];
    //itsTime.appendChild(li);
  }
  //var newItem = document.createElement('li');
 // var text = document.createTextNode()
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key1", qty+" Alien Blood Jam ");
	
}
function orderBlueberryJam(){
	var qty = document.getElementById('numberOfBlueberryJamsOrdered').value;
	var price = qty * 9.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key2", qty+" Blueberry Jam ");
}
function orderTropicalJam(){
  var qty = document.getElementById('numberOfTropicalJamsOrdered').value;
	var price = qty * 14.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key3", qty+ " Tropical Jam ");
}
function orderSecretStuff(){
  var qty = document.getElementById('numberOfSecretStuffsOrdered').value;
	var price = qty * 29.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key4", qty+ " Jordan's Secret Stuff ");
}
function orderDragonFruitJam(){
  var qty = document.getElementById('numberOfDragonFruitJamsOrdered').value;
	var price = qty * 14.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key5", qty+ " Dragon Fruit Jam ");
	
}
function orderMarmaladeFromTheSun(){
  var qty = document.getElementById('numberOfMarmaladesOrdered').value;
	var price = qty * 9.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('total').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key5", qty+ " Dragon Fruit Jam ");
}
function finalizeOrder(){
  cartContents=[];
	for (var i = 0; i < sessionStorage.length; i++){
	cartContents.push(sessionStorage.getItem(sessionStorage.key(i)));}
	localStorage.setItem("cartItems", JSON.stringify(cartContents));
  localStorage.setItem("shouldBeTheTotal", JSON.stringify(cartPrice));
  location.href="receiptPage2.html";
}