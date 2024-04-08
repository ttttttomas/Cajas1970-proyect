const arrow = document.getElementById("arrow");
const nav = document.getElementById("nav");
const letters = document.getElementById("letters");
const text = document.getElementById("divText");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const products = document.getElementById("products");
const arrowList = document.querySelector(".nav .container-letters .bx");
const containerList = document.querySelector(".nav .list-inside");
const sucursales = document.querySelector(".nav .sucursales-container");


arrowList.addEventListener("click",()=>{
    containerList.classList.toggle("close");
} )




