const hamburger = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".side-content-mobile");
const mainContent = document.querySelector(".main-container");


hamburger.addEventListener('click',() => {
    sideBar.classList.add("show")
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})

mainContent.addEventListener('click',() =>{
    sideBar.classList.remove("show")
    document.body.style.backgroundColor = "rgb(241, 241, 241)";
})