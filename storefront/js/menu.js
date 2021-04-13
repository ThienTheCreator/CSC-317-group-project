if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

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
    console.log(event.target);
    console.log("quant changed");
}

function addCartItem(event){
    var button = event.target;
    var food = button.parentElement;
    var name = food.getElementsByClassName("shop-item-title")[0].innerText;
    var price = food.getElementsByClassName("shop-item-price")[0].innerText;
    var foodQuant = food.getElementsByClassName("food-quantity")[0];

    foodQuant.value = parseInt(foodQuant.value)+1;
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
    
}