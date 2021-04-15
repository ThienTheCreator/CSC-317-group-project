/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	print();
	document.getElementById("myDropdown").classList.toggle("show");
}

// Store data
// var someData = 'The data that I want to store for later.';
// localStorage.setItem('myDataKey', someData);

// Get data
// var data = localStorage.getItem('myDataKey');

// Remove data
// localStorage.removeItem('myDatakey');


/* Decrement when button is clicked*/
function subtractButton(id){
	var count = parseInt(document.getElementById(id).value);
	count = count - 1;
	document.getElementById(id).value = count;
}

/* Increment when button is clicked*/
function addButton(id){
	var count = parseInt(document.getElementById(id).value);
	count = count + 1;
	document.getElementById(id).value = count;
}
 
// menu item and price
var itemList = [
	["Beef: ",999],
	["Ribs: ",999],
	["Pizza: ",999],
	["Fried Rice: ",999],
	["Sandwich: ",999],
	["Burger: ",999],
	["Chicken: ",999],
	["Tacos: ",999],
	["Vegetable: ",999],
	["Duck: ",1499],
	["Steak: ",1699],
	["Lobster: ",2499],
	["Water: ", 0],
	["Soda: ",199],
	["Chicken Delight: ",1099]
];


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var orderButtons = document.getElementsByClassName("button-order");
    console.log(orderButtons);

	for (var i = 0; i < orderButtons.length; i++) {
	        var order_button = orderButtons[i];
	        order_button.addEventListener('click', orderItem);
    	}
}


// Add item to cart.
function orderItem(event){
	var button = event.target;
	var food = button.parentElement;
	var name = food.getElementsByClassName("shop-item-title")[0].innerText;
	var foodQuant = food.getElementsByClassName("food-quantity")[0];
	var amount = parseInt(foodQuant.value);

	var items;
	if(getCookie('a') != undefined){
		items = JSON.parse(getCookie('a'));
	}
	
	var found = false;
	if(items != undefined)
	for(var i = 0; i < items.length; i++){
		if(name == items[i][0]){
			found = true;
			itemNum = i;
			if(amount == 0){
				items[i] = items[items.length-1];
				items.pop(); 
			}else if(items[i][1] != amount){
				items[i][1] = amount;	
			}
			break;
		}	
	}
	
	var itemNum;
	for(var i = 0; i < itemList.length; i++){
		if(itemList[i][0] == name){
			itemNum = i;
		}
	}
	
	if(!found && amount != 0){
		if(items != undefined)
			items.push([name,amount,itemList[itemNum][1]]);
		else
			items = [[name,amount,itemList[itemNum][1]]];
	}
	var json_str = JSON.stringify(items);
	document.cookie = "a="+ json_str + "; expires= 18 Dec 2021 12:00:00 UTC";
	print();
}

// returns the cookie with the given name,
// or undefined if not found
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function print(){
	
	var x = getCookie('a');
	if(x != undefined){
	var items = JSON.parse(x);
	
	
	var cartItems = document.getElementById("myDropdown");
	var numElements = document.getElementById("myDropdown").childElementCount;
	cartItems.innerHTML = "";
	
	var total = 0;
	for(var i = 0; i < items.length;i++){
		var cartRow = document.createElement('div');		
		var cartStr = JSON.stringify(items[i][1]) + ' ' + JSON.stringify(items[i][0]) + ' $' + JSON.stringify(items[i][2]/100);
		var cartRowContents = '<div>'+ cartStr +'</div>';
		cartRow.innerHTML = cartRowContents;
		cartItems.append(cartRow);
		total = total + items[i][2] * items[i][1];
	}
		var cartRow = document.createElement('div');		
		var cartStr = "Total: $" + JSON.stringify(total/100);
		var cartRowContents = '<div>-----------------</div><div>'+ cartStr +'</div>';
		cartRow.innerHTML = cartRowContents;
		cartItems.append(cartRow);
	}
}
