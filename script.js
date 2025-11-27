const copyrightYear = document.querySelector(".copyright-year")

const actualDate = new Date();
const actualYear = actualDate.getFullYear();

copyrightYear.innerHTML = actualYear

const navTrigger = document.querySelector(".nav-trigger");
const mainNav = document.querySelector(".main-nav")

navTrigger.addEventListener("click", (e) => {
    e.target.classList.toggle("fa-bars");
    e.target.classList.toggle("fa-xmark");
    mainNav.classList.toggle("active");
})