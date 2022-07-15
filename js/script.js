/*heater js*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

/*mostrar mas*/
const readmorebtn = document.querySelector('.boton');
const texto = document.querySelector('.texto');

readmorebtn.addEventListener('click',(e)=>{
    texto.classList.toggle('show-more')
    if(readmorebtn.innerText === 'Mostrar más'){
        readmorebtn.innerText = 'Mostrar menos';
    }else{
        readmorebtn.innerText = 'Mostrar más';
    }
})
/*fin mostrar mas*/