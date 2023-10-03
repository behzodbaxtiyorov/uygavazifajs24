



const username = document.getElementById('username');
const demo = document.getElementById('demo');


function reg(){
    localStorage.setItem('username', String(username.value));
    let user = localStorage.getItem('username');
    if (user){
        location.href = 'login.html';
    }else{
        demo.textContent = 'malumot kirgizing'
    }
}





const username1 = document.getElementById('login');
const demo1 = document.getElementById('demo1');



function kirish(){
    localStorage.setItem('login', String(login.value));
    let user = localStorage.getItem('login');
    if (user){
        location.href =  'home.html';
    }else{
    demo1.textContent = 'malumot kirgizing'
    }
}















const inp = document.querySelector('input');
inp.style.width = '200px';
inp.style.height ='40px';
// inp.style.backgroundColor = 'green';
inp.style.margin = '100px'


const btn = document.querySelector('button');
// btn.style.backgroundColor = 'blue';
btn.style.width = '100px';
btn.style.height ='40px';
btn.style.margin = '-80px'