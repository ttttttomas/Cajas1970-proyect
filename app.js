const arrow = document.getElementById("arrow");
const nav = document.getElementById("nav");
const letters = document.getElementById("letters");
const text = document.getElementById("divText");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const products = document.getElementById("products");
const arrowList = document.querySelector(".nav .container-letters .bx");
const containerList = document.querySelector(".nav .list-inside");



arrow.addEventListener("click",()=>{
    nav.classList.toggle("close");
    text.classList.toggle("close");
    
})

arrowList.addEventListener("mousemove",()=>{
    containerList.classList.toggle("close");
} )

console.log(containerList)
console.log(arrowList)


