const arrow = document.getElementById("arrow");
const nav = document.getElementById("nav");
const letters = document.getElementById("letters");
const text = document.getElementById("divText");


arrow.addEventListener("click",()=>{
    nav.classList.toggle("close");
    text.classList.toggle("close")
})