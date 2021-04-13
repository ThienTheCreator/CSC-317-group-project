var addButtons = document.getElementsByClassName("button-add");
var removeButtons = document.getElementsByClassName("button-minus");
var foodQuant = document.getElementsByClassName("foodQuantity");

for(var i=0; i<addButtons.length; i++){
    var button = addButtons[i];
    button.addEventListener('click', function(){
        console.log("hello");
    })
}

class Food{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.amount = 0;
    }

    add(){
        this.amount++;
    }

}