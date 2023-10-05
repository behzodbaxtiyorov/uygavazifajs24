
const list = document.querySelector('.list');

function getLocalStorage(){
    if (localStorage.getItem('users')){
return JSON.parse(localStorage.getItem('users'));        
    } else{
        return [];

    }
}


function addToLocalStorage(user){
    let users = {user}
    let items = getLocalStorage();
    items.push(users);
    localStorage.setItem('users', JSON.stringify(items));
location.reload(true);
}

let users = getLocalStorage();

for (let i = 0; i < users.length; i++){
    list.innerHTML += `<li>${users[i].user}</li>`
}




function clearL(){
    localStorage.clear();
    location.reload(true);
}