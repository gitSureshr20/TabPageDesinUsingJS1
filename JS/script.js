
document.addEventListener("DOMContentLoaded",function(){
    let contianer = document.querySelector(".container");
    let header = document.querySelector(".header");
    let menuItem = contianer.querySelectorAll(".header > div");
    let tabbody = contianer.querySelector(".body");
    let tabbodyElements = contianer.querySelectorAll(".body > div");
    let indicator =contianer.querySelector(".indicator > div");

    menuItem.forEach((tab,index)=>{
        tab.addEventListener("click",function(){
            header.querySelector(".active").classList.remove("active");
            tab.classList.add("active");

            indicator.style.left=`${index*25}%`

            tabbody.querySelector(".active").classList.remove("active");
            tabbodyElements[index].classList.add("active");
        })
    })
});


