const navToggler = ()=>{
const burger = document.querySelector('.burger');
const navItems = document.querySelector('.navigation-items');

burger.addEventListener('click',()=>{
navItems.classList.toggle('.nav-toggler');
    console.log('bugger clicked');

    console.log(navItems.classList.toggle('.nav-toggler'));
    console.log(navItems);

});

}

navToggler();   