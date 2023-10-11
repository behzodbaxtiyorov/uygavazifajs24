const data = [
    {
        id:1,
        name: 'sir',
        img: './img/desno.png',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 260  ,
        bnt: '<button>В корзину</button>'
    },
    {
        id:2,
        name: 'sut',
        img: './img/sut.png',
        desc: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ...',
        price: 310,
        bnt: '<button>В корзину</button>'
    },
    {
        id:3,
        name: 'moloka',
        img: './img/moloka.png',
        desc: 'Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром...',
        price: 611,
        bnt: '<button>В корзину</button>'
    },
    {
        id:4,
        name: 'masla',
        img: './img/masla.png ', 
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 258,
        bnt: '<button>В корзину</button>'
    },
    {
        id:5,
        name: 'yogut1',
        img: './img/yogurt1.png',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 105,
        bnt: '<button>В корзину</button>',
    },
    {
        id:6,
        name: 'yogurt2',
        img: './img/yugurt2.png',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: 125,
        bnt: '<button>В корзину</button> '
    },
];


const list = document.querySelector('.list');
const si = document.getElementById('search');
const sb = document.getElementById('sb');
const price = document.getElementById('price');



function saveToLocalStorage() {
  
  const dataToSave = 'saqlandi';

  
  localStorage.setItem('key', JSON.stringify(dataToSave));
}



function saqlaToLocalStorage() {
  
  const dataToSave = 'like';

  
  localStorage.setItem('key', JSON.stringify(dataToSave));
}
    

window.addEventListener('DOMContentLoaded', function () {
    let displayitems = data.map(function (item) {
        return `
        <li id="el" data-id="${item.id}">
        <img src="${item.img}" alt="">
        <h3>${item.price}</h3>
        <h3>${item.desc}</h3>
        <button>${item.bnt}</button>

        </li>
        `
    })
    displayitems = displayitems.join('')
    list.innerHTML = displayitems;

    const el = document.querySelectorAll("#el");

    for (let i = 0; i < el.length; i++){
        console.log(el[i]);
    }
    
    })


sb.addEventListener('click', function () {
    let displayitems = data.map(function (item) {
        if (si.value === item.name) {
            return `
        <img src="${item.img}" alt="">
        <h3>${item.price}</h3>
        <h3>${item.desc}</h3>
        <button>${item.bnt}</button>
        `
        }
        
    })
    displayitems = displayitems.join('')
    list.innerHTML = displayitems;
})

price.addEventListener('click', function () {
    console.log(price.value);
    data.map(function (item) {
        if (item.price < price.value) {
           list.innerHTML += `<li>
           <h2>${item.name}</h2>
           <img src="${item.img}" />
           <h3>${item.price}</h3>
           <h3>${item.desc}</h3>
           <button>${item.bnt}</button>

           </li>`
      }
   })
})
