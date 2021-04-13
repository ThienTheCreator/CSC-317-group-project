var addButtons = document.getElementsByClassName("button-add");
var removeButtons = document.getElementsByClassName("button-minus");
var foodQuant = document.getElementsByClassName("foodQuantity");

for(var i=0; i<addButtons.length; i++){
    var button = addButtons[i];
    button.addEventListener('click', function(){
        foodQuant[i].value = parseInt(input.value)+1;
    })
}

for(var i=0; i<removeButtons.length; i++){
    var button = removeButtons[i];
    button.addEventListener('click', function(){
        if(foodQuant[i].value>0){ // we don't want to let the amound order go less than 0
            foodQuant[i].value = parseInt(foodQuant[i].value)-1;
        }
    })
}