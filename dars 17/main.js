

const box = document.querySelector('.box');

let url = 'https://jsonplaceholder.typicode.com/photos';

fetch(url)
   .then((response) => response.json())
   .then((data) => {
       let arr = data;

       let display = arr.map((item) => {
           return `
           <div class="element" data-id="${item.id}">
               
               <h1>${item.id}</h1>
               <h2>${item.title}</h2>
               <p>${item.url}</p>
               <button class="btn">o'chirish</button>
           </div>
           `;
       });
       display = display.join(' ');

       box.innerHTML = display;

       const buttons = document.querySelectorAll('.btn');

       buttons.forEach((button) => {
           button.addEventListener('click', (e) => {
               let item = e.target.parentElement;
               let id = item.getAttribute('data-id');
            
               item.remove(); 
           });
       });
   });

























   // const box = document.querySelector('.box');


// let url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url)
//    .then((response) => response.json())
//    .then((data) => {
//     let arr = data;

//          let display = arr.map((item) => {
//             return `
//             <div class = "element" data-id = "${item.id}">
                
//                 <h2>${item.title}</h2>
                
//                 <button id = "btn">delete</button>


//             </div>
//             `
//          });
//          display = display.join(' ');

//          box.innerHTML = display;

//          const btn = document.querySelector('#btn');

//          for(let i = 0; i < btn.length; i++) {
//         btn[i].addEventListener("click",(e) => {
//             let item = e.target.parentElement;
//             let id = item.getAttributeNode('data-id').value;
//             console.log(id);
//         })
//          }

//    })
         











// const box = document.querySelector('.box');

// let url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url)
//    .then((response) => response.json())
//    .then((data) => {
//        let arr = data;

//        let display = arr.map((item) => {
//            return `
//            <div class="element" data-id="${item.id}">
//                <h2>${item.title}</h2>
//                <button id="btn">o'chirish</button>
//            </div>
//            `;
//        });
//        display = display.join(' ');

//        box.innerHTML = display;

//        const buttons = document.querySelectorAll('#btn');

//        buttons.forEach((button) => {
//            button.addEventListener('click', (e) => {
//                let item = e.target.parentElement;
//                let id = item.getAttribute('data-id');
//                console.log(id);
//            });
//        });
//    });












