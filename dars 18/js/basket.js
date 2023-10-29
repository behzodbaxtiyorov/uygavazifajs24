const list = document.querySelector('.list')


function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
  }

  let basket = getLocalStorage();

  window.addEventListener('DOMContentLoaded', () =>{
      


    let display = basket.map((item) =>{
        return `
        <li class = "item">
        <img src="${item.url}" />
        <h2>${item.title}</h2>
        </li>
        `
    })

list.innerHTML = display    
  } )