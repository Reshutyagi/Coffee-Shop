let navbar = document.querySelector('.navbar');

console.log("reshu tyagi");

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
}

let cardItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = ()=>{
    cardItem.classList.toggle('active');
}