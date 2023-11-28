let body =  document.querySelector("body");
let cart =  document.querySelector(".cart");
let click = document.querySelector(".click");
let modal =  document.querySelector(".modal");
let icon = document.querySelector(".icon");


cart.addEventListener("click", () =>{
    click.style.display = "flex";
});

icon.addEventListener("click", () =>{
    click.style.display = "none";
})