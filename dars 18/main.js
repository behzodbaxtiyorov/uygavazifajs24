


let url = 'https://jsonplaceholder.typicode.com/albums/1/photos';


const list = document.querySelector('.list');

function getPhotos(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let display = data.map((item) => {
        return `<li data-id="${item.id}">
                  <img src="${item.url}">
                  <h2>${item.title}</h2>
                  <button class="add-button">addtolocalStorage</button>
                </li>`;
      });
      list.innerHTML = display.join('');

      const addButtons = document.querySelectorAll('.add-button');

      addButtons.forEach((button) => {
        button.addEventListener('click', function (e) {
          let item = e.target.parentElement;
          let id = item.getAttribute('data-id');

          addToLocalStorage(id);
        });
      });
    });
}

getPhotos(url);

function getLocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

function addToLocalStorage(id) {
  let items = getLocalStorage();
  items.push(id);
  localStorage.setItem('list', JSON.stringify(items));
}