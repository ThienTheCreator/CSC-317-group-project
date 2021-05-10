if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

webStorage = window.sessionStorage;

// Food object to be added to cart
class FoodItem{
    constructor(name, price, amount){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}

// Cart object to be passed to the cart page
class FoodCart{
    constructor(){
        this.cart = new Map();
        this.FoodItem = [];
    }

    //Function to add new item to cart
    updateCart(name, price, amount){
        if (this.cart.has(name)){
            this.cart.get(name).amount = amount;
        } else {
            var newItem = new FoodItem(name, price, amount);
            this.cart.set(name, newItem);
        }

        webStorage.setItem('cart', this.cart);

        console.log(name + ": " + this.cart.get(name).price + ", " + this.cart.get(name).amount);
        
    }
}

var food_cart = new FoodCart();


function ready(){
    var addButtons = document.getElementsByClassName("button-add");
    console.log(addButtons);

    var removeButtons = document.getElementsByClassName("button-minus");
    console.log(removeButtons);   

    var foodQuant = document.getElementsByClassName("food-quantity");
    console.log(foodQuant);

    for (var i = 0; i < foodQuant.length; i++) {
        var input = foodQuant[i];
        input.addEventListener('change', quantityChanged);
    }

    for (var i = 0; i < addButtons.length; i++) {
        var add_button = addButtons[i];
        add_button.addEventListener('click', addCartItem);
    }

    for (var i = 0; i < removeButtons.length; i++) {
        var rem_button = removeButtons[i];
        rem_button.addEventListener('click', removeCartItem);
    }

}

function quantityChanged(event){
    var input = event.target;
    var food = input.parentElement;
    var name = food.getElementsByClassName("shop-item-title")[0].innerText;
    var price = food.getElementsByClassName("shop-item-price")[0].innerText;
    var foodQuant = food.getElementsByClassName("food-quantity")[0];

    food_cart.updateCart(name, price, foodQuant.value);
}

function addCartItem(event){
    var button = event.target;
    var food = button.parentElement;
    var name = food.getElementsByClassName("shop-item-title")[0].innerText;
    var price = food.getElementsByClassName("shop-item-price")[0].innerText;
    var foodQuant = food.getElementsByClassName("food-quantity")[0];

    foodQuant.value = parseInt(foodQuant.value)+1;

    food_cart.updateCart(name, price, foodQuant.value);
}

function removeCartItem(event){
    var button = event.target;
    var food = button.parentElement;
    var name = food.getElementsByClassName("shop-item-title")[0].innerText;
    var price = food.getElementsByClassName("shop-item-price")[0].innerText;
    var foodQuant = food.getElementsByClassName("food-quantity")[0];

    if(foodQuant.value > 0){
        foodQuant.value = parseInt(foodQuant.value)-1;
    } else {
        console.log("quant is at minimum");
    }
    food_cart.updateCart(name, price, foodQuant.value);    
}