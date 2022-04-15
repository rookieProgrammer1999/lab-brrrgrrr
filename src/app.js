// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
    Patty: 80,
    Cheese: 10,
    Tomatoes: 20,
    Onions: 20,
    Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
    Patty: false,
    Cheese: true,
    Tomatoes: true,
    Onions: true,
    Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
    renderPatty();
    renderCheese();
    renderTomatoes();
    renderOnions();
    renderLettuce();
    renderButtons();
    renderIngredientsBoard();
    renderPrice();
}

function renderPatty() {
    let patty = document.querySelector("#patty");
    //you can also use getElementById
    // console.log("patty")

    if (state.Patty) {
        patty.style.display = "inherit";
    } else {
        patty.style.display = "none";
    }
}

function renderCheese() {
    //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
    let cheese = document.querySelector("#cheese");
    // console.log("cheese")
    if (state.Cheese) {
        cheese.style.display = "inherit";
    }
    else {
        cheese.style.display = "none";
    }
}

function renderTomatoes() {
    //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
    let tomatoes = document.querySelector("#tomato");
    // console.log("tomato")
    if (state.Tomatoes) {
        tomatoes.style.display = "inherit";
    }
    else {
        tomatoes.style.display = "none";
    }
}

function renderOnions() {
    //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
    let onion = document.querySelector("#onion");
    // console.log("onion")
    if (state.Onions) {
        onion.style.display = "inherit";
    }
    else {
        onion.style.display = "none";
    }
}

function renderLettuce() {
    //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
    let lettuce = document.querySelector("#lettuce");
    // console.log("lettuce")
    if (state.Lettuce) {
        lettuce.style.display = "inherit";
    }
    else {
        lettuce.style.display = "none";
    }
}

document.querySelector(".btn-patty").onclick = function () {
    state.Patty = !state.Patty;
    renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
    state.Cheese = !state.Cheese;
    renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
    state.Tomatoes = !state.Tomatoes;
    renderAll();
}
// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
    state.Onions = !state.Onions;
    renderAll();
}

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
    state.Lettuce = !state.Lettuce;
    renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
    pattyButton();
    cheeseButton();
    tomatoButton();
    onionButton();
    lettuceButton();
}

let pattyButton = () => document.querySelector(".btn-patty").classList.toggle("active", state.Patty);
let cheeseButton = () => document.querySelector(".btn-cheese").classList.toggle("active", state.Cheese);
let tomatoButton = () => document.querySelector(".btn-tomatoes").classList.toggle("active", state.Tomatoes);
let onionButton = () => document.querySelector(".btn-onions").classList.toggle("active", state.Onions);
let lettuceButton = () => document.querySelector(".btn-lettuce").classList.toggle("active", state.Lettuce);

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard() {
    let items = document.getElementsByClassName("items");
    items[0].style.display = state.Patty ? "inherit" : "none"
    items[1].style.display = state.Cheese ? "inherit" : "none"
    items[2].style.display = state.Tomatoes ? "inherit" : "none"
    items[3].style.display = state.Onions ? "inherit" : "none"
    items[4].style.display = state.Lettuce ? "inherit" : "none"
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice() {
    const payButton = document.querySelector(".Rectangle5");

    var price = 20; //Bun price
    price += state.Patty ? ingredients.Patty : 0
    price += state.Cheese ? ingredients.Cheese : 0
    price += state.Tomatoes ? ingredients.Tomatoes : 0
    price += state.Onions ? ingredients.Onions : 0
    price += state.Lettuce ? ingredients.Lettuce : 0

    document.querySelector(".price-details").innerHTML = `INR ${price}`;
    payButton.onclick = () => window.alert(`Total Price - INR ${price}`)
}