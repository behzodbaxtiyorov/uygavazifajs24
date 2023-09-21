// let instaUser = ['ab', 'ba', 'ca', 'da', 'ea', ' ha'];

// let random = Math.round(Math.random() * instaUser.length);

// alert(random);









// 1-savol: JavaScript nima?

// JavaScript - dunyoda eng ommabop va juda keng tatbiq etiladigan veb-dasturlash tilidir. Hozirda barcha 
// veb-brauzerlar ushbu tilni qollagani bois uning joriy etilish qamrovi nihoyatda keng, u har bir sohaga faol kirib borgan








// 2-savol: JavaScriptni HTMLga boglash?

// JavaScript ham HTMLga xuddi CSS singari bog' lanadi, ya'ni maxsus teg ichida dasturlash kodini yozish 
// orqali yoki alohida fayl sifatida e'lon qilingan kodni biriktirish ham mumkin. 
// Teg ichida kod yozish uchun: maxsus 'SCRIPT' tegi ishlatiladi. Masalan: <script src="./main.js"></script>










//3-savol: matematik operatorlar?

// bular quyidagilar:
// plus "+"
// minus "-"
// assignment "="
// kopaytirish "*"
// bolish "/"
// darajaga oshirish "**"
// increment "++"
// decrement "--"









// 4-savol: Variabels (ozgaruvchilar) var, let, const

// Dasturlashda qiymat yoki xotiradagi manzilni saqlash uchun maxsus nomlanishdan foydalaniladi. ushbu nomni "Variables" (ozgaruvchi)
// deb yuritiladi va u indentifikator (ID) talablariga javob berishi kerak. ozgaruvchi nomi bitta bolishi kerak

// var- Javascriptning eski versiyalarida ishlatiladi. masalan:
// var x = 12;
// console.log(x);
// varning kopgina kamchiliklari borligi uchun "let" chiqarilgan
// varning letdan birinchi farqi varni qayta qayta chaqirsa ham xatolik bermaydi va uzgarishda davom MediaElementAudioSourceNode. masalan:
// var x = 12;
// var x = 13;
// A letni bunaqa yozsak xatolik beradi:
// let x = 13;
// let x = 12;


// const (constanta) - constni faqat bir marta chaqirsak boladi va dastur davomida qayta elon qilib bolmaydi
// const color = "red"; // ozgarmas elon qilindi 
// color = color = "yellow"; // qiymatni ozgartirish xato








// 5-savol Data types?
// Data typeslar 8 turga bolinadi  bular: 'string'; 'number'; 'boolean'; 'null'; 'undefined'; 'object'; 'array'; "begin";






// String- stringlar har doim qoshtirnoq ichida yoziladi buning ichida hoxlagan turdagi malumot kelishi mumkin
// var person = "Behzod"
// console.log(person);




// Number- Sonlar 
// let age = 21
// console.log(age);





// Boolean- 'true' va 'false'





// Null- null 'hech narsa ' degani. Null qiymat mavjud emasligini anglatadi








// undefined- o'zgaruvchi elon qilingan lekin biror narsaga tenglashtirimagan bolsa undefined (qiymat berilmagan) boladi. masalan:

// var x;
// console.log(x);   //undefined






// Object- eng murakkab va mukammal tur hisoblanadi va u uz ichiga bir nechta qiymatlarni qabul qila oladi. Masalan:

// let person = {
//     name: 'Behzod',
//     age: 21,
//     erkak: true
// };
// console.log(person.age);














// 6-savol:// if else

// let a = 10;

// if (a > 0) {
//     console.log('0 dan katta');
// } else {
//     console.log('0 dan kichik');
// }








// 7-savol logical operatorlar- bu operatorlar qiymatlarning 'true' yoli 'false' bolishini tekshiradi. masalan:
// && 'va' ga misol
// let x = 10;
// let y = 30;

// if (x > 5 && y < 35) {
//     console.log(true);
// } else {
//     console.log(false);
// }




// || 'yoki' ga misol

// let x = 10;
// let y = 30;

// if (x > 15 || y < 32) {
//     console.log(true);
// } else {
//     console.log(false);
// }











// 8- savol:type conversions - bir malumot turidan boshqa malumotturiga utkazish

// let x = '10';
// let y = 5;

// let res = x + y;
// console.log(res); 

// let res = x - y;
// console.log(res);










// 9-savol ternary operatorlar

// let age = 21;

// let PasportOlish = age >= 16 ? 'pasport oladi' : 'pasport ololmaydi';
// console.log(PravaOlish);



// var a = 7;
// var result = a>0 ? "true" : "false";
// console.log(result);




// var a = 9;
// var b = 5;
// var c = 4;
// var result = a>b && b>c ? "true" : "false";
// console.log(result);











// 10-savol: truthy and falthy: shartning rost yoki yolgonligini tekshiradi
