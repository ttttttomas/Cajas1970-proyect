const arrow = document.getElementById("arrow");
const nav = document.getElementById("nav");
const letters = document.getElementById("letters");
const text = document.getElementById("divText");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const products = document.getElementById("products");


arrow.addEventListener("click",()=>{
    nav.classList.toggle("close");
    text.classList.toggle("close");
    
})

console.log(products)
