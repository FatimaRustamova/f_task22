let cart =  document.querySelector(".basket");
let click = document.querySelector(".click");
let icon = document.querySelector(".icon");
let boxes = document.querySelector(".boxes");
let toys = document.querySelector(".toys");
let mouse = document.querySelector(".mouse");
let shop = document.querySelector(".shop");
let template = document.querySelector(".template");
let nav = document.querySelector(".nav");
let nav_icon = document.querySelector(".nav_icon");
let list = document.querySelector(".list");
// let button =  document.querySelector("#button");
// let video = document.querySelector(".video");
// let x_icon = document.querySelector(".x_icon");
let a = document.querySelectorAll("#a");


///---1---///
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        template.style.display = "none";
        nav.style.top = "0";
        nav.style.left = "0"
        nav.style.backgroundColor = "black";
        a.forEach(item=>{
            item.style.color = "white";
        })
        nav.style.transition = "all .5s ease";
        nav.style.padding = "10px 0";
    }
    else{
        template.style.display = "";
        nav.style.position = "";
        nav.style.backgroundColor = "";
        a.forEach(item=>{
            item.style.color = "";
        })
        nav.style.transition = "all .5s ease";
        nav.style.padding = "";
    }
})


///---2---///
mouse.addEventListener("click", (e)=>{
    e.preventDefault();
    shop.scrollIntoView({behavior: "smooth"});
})


///---3---///
nav_icon.addEventListener("click", ()=>{
    list.classList.toggle("none");
})

// body.addEventListener("click", (e)=>{
//     if(e.target !== list){
//         list.classList.add("none");
//     }
// })


///---4---///
const box = [
    {   image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png",
        font: "Teddy Bear",
        usd: "$ 30.000 USD"
    },

    {   image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png",
        font: "Mega Plush Toy",
        usd: "$ 38.000 USD"
    },

    {   image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png",
        font: "Cute Dog",
        usd: "$ 24.000 USD"
    },

    {   image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png",
        font: "Little Friend",
        usd: "$ 27.000 USD"
    }
]

box.forEach(item => {
    boxes.innerHTML += `<div class="dog">
    <img src="${item.image}" alt="">
    <p>${item.font}</p>
    <div class="usd">${item.usd}</div>
</div>`
})

const divs = [
    {   image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png",
        font: "Happy Flower",
        usd: "$ 38.000 USD"
    },

    {   image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min-p-500.png",
        font: "Lift Machine",
        usd: "$ 24.000 USD"
    },

    {   image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png",
        font: "Wooden Camera",
        usd: "$ 32.000 USD"
    },
    {   image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png",
        font: "Little Rabbit",
        usd: "$ 16.000 USD"
    }
]

divs.forEach(item => {
    toys.innerHTML += `<div class="dog">
    <img src="${item.image}" alt="">
    <p>${item.font}</p>
    <div class="usd">${item.usd}</div>
</div>`
})


///---5---///
cart.addEventListener("click", () =>{
    click.style.display = "flex";
});

icon.addEventListener("click", () =>{
    click.style.display = "none";
})

click.addEventListener("click", (e)=>{
    if(e.target == click){
        click.style.display = "none";
    }
})

document.addEventListener("keydown", (i)=>{
    if(i.key == "Escape"){
        click.style.display = "none";
    }
})


///---Video---///
// button.addEventListener("click", ()=>{
//     video.style.display = "flex";
//     nav.style.position = "static";
// })

// x_icon.addEventListener("click", ()=>{
//     video.style.display = "none";
// })

// video.addEventListener("click", (e)=>{
//     if(e.target == video){
//         video.style.display = "none";
//     }
// })

// document.addEventListener("keydown", (i)=>{
//     if(i.key == "Escape"){
//         video.style.display = "none";
//     }
// })