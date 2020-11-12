console.log(" %c Welcome Master!!!!","color: green; font-family:monospace; font-size: 20px")
const navBar = document.getElementsByTagName("nav");
const logo = document.getElementsByClassName("logo");
const navTopPosition = navBar[0].offsetTop;

function navPosition(e){
    if (window.scrollY >= navTopPosition){
        navBar[0].classList.add("sticky")
    }else{
        navBar[0].classList.remove("sticky")
    }
}

window.addEventListener("scroll", navPosition);
