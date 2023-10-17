// class va constructor







//1

// class students {
//     constructor ( name, age, IELTS )
//     {
//         this.name = name ;
//         this.age = age ;
//         this.IELTS=IELTS ;
//     }
// }

// const Ali = new students ('Ali' , 20 , 5) ;
// const Umidjon = new students ('Umidjon' , 19,  6) ;
// const Adxam = new students ('Adxam' , 18,  6) ;









//2

// class groups {
//     constructor ( name, age, IELTS )
//     {
//         this.name = name ;
//         this.members = members ;
//         this.level=level ;
//     }
// }

// const n8 = new groups ('React N8' , 20 , 'middle') ;
// const n9 = new groups ('React N9' , 21,  'junior') ;
// const n10 = new groups ('React N10' , 18,  'beginner') ;










//3

// class logistics_Company {
//     constructor ( name, trucks, country )
//     {
//         this.name = name ;
//         this.trucks = trucks;
//         this.country=country ;
//     }
// }

// const alz = new logistics_Company ('ALZ Express' , 115 , 'Uzbekistan ') ;
// const bobstar= new logistics_Company ('Bobstar' , 900,  'the USA') ;
// const masterload= new logistics_Company ('Masterload' , 550,  'New Zealand') ;











//4

// class parks {
//     constructor ( name, city)
//     {
//         this.name = name ;
//         this.city= city;
//     }
// }

// const magic  = new parks ('Magic City' , 'Tashkent ') ;

// const disneyland = new parks ('Disneyland , New york ') ;











//5

// class parks {
//     constructor ( name, city)
//     {
//         this.name = name ;
//         this.city= city;
//     }
// }

// const magic  = new parks ('Magic City' , 'Tashkent ') ;

// const disneyland = new parks ('Disneyland ' , 'New York') ;













//6

// class fastfood {
//     constructor ( name, country)
//     {
//         this.name = name ;
//         this.country= country;
//     }
// }

// const KFC  = new fastfood ('Kentucky Fried Chicken' , 'The USA ') ;

// const EVOS = new fastfood ('EVOS ' , 'Uzbekistan') ;













//7

// class Football_clubs {
//     constructor ( name, UEFA_cups)
//     {
//         this.name = name ;
//         this.UEFA_cups=UEFA_cups;
//     }
// }

// const barsa = new Football_clubs ('FC.Barcelona' , 5 ) ;

// const real = new Football_clubs ('Real Madrid ' , 13 ) ;














//8

// class Planets {
//     constructor ( situation, moons )
//      {
//         this.situation=situation;
//         this.moons=moons;
//     }
// }

// const mars = new Planets ('4th' , 2 ) ;

// const saturn = new Planets ('6th ' , 70 ) ;















//9

// class Games {
//     constructor ( name, fanbase )
//      {
//         this.name=name;
//         this.fanbase=fanbase;
//     }
// }

// const pubg = new Games ('Player Unknowns Battlegrounds' , '900 million'  ) ;

// const mlbb = new Games ('Mobile Legends Bang Bang ' , '1 billion' ) ;














//10

// class Games {
//     constructor ( name, fanbase )
//      {
//         this.name=name;
//         this.fanbase=fanbase;
//     }
// }

// const pubg = new Games ('Player Unknowns Battlegrounds' , '900 million'  ) ;

// const mlbb = new Games ('Mobile Legends Bang Bang ' , '1 billion' ) ;












// array filter()




// const toplam1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const toqSonlar = toplam1.filter((element) => element % 2 !== 0);
// console.log(toqSonlar); // [1, 3, 5, 7, 9]







// const toplam2 = [10, 25, 9, 101, 50, 77, 99, 102];
// const ikkiXonaliSonlar = toplam2.filter((element) => element >= 10 && element <= 99);
// console.log(ikkiXonaliSonlar); // [10, 25, 77, 99]






// const toplam3 = ['salom', 'hayr', 'bugun', 'yaxshi', 'sizga', 'qiziqishli', 'misol'];
// const uzunSozlar = toplam3.filter((element) => element.length > 5);
// console.log(uzunSozlar); // ['qiziqishli']






// const toplam4 = [
//   { nomi: 'Ali', yosh: 25 },
//   { nomi: 'Vali', yosh: 30 },
//   { nomi: 'Asad', yosh: 20 },
//   { nomi: 'Sara', yosh: 28 },
// ];
// const yoshdanKattaObyekt = toplam4.filter((element) => element.yosh > 25);
// console.log(yoshdanKattaObyekt); 

















// array forEach()



// const son = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// son.forEach((element) => {
//   console.log(element);
// });







// const top= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let yigindi = 0;
// top.forEach((element) => {
//   yigindi += element;
// });
// console.log(yigindi); 






// const str = ['salom', 'hayr', 'bugun', 'yaxshi'];
// str.forEach((element) => {
//   console.log(element);
// });







// const toplam = [
//   { nomi: 'Ali', yosh: 25 },
//   { nomi: 'Vali', yosh: 30 },
//   { nomi: 'Asad', yosh: 20 },
//   { nomi: 'Sara', yosh: 28 },
// ];
// toplam.forEach((element) => {
//   console.log(element.nomi + ' ' + element.yosh + ' yoshda');
// });
















// array map ()



// const toplam1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const kop = toplam1.map((element) => element * 2);
// console.log(kop); 






// const toplam2 = [1, 2, 3, 4, 5];
// const kv = toplam2.map((element) => element ** 2);
// console.log(kv); 






// const toplam3 = ['salom', 'hayr', 'bugun'];
// const katta = toplam3.map((element) => element.charAt(0).toUpperCase() + element.slice(1));
// console.log(katta); 









// const toplam4 = [
//   { nomi: 'Ali', yosh: 25 },
//   { nomi: 'Vali', yosh: 30 },
//   { nomi: 'Asad', yosh: 20 },
// ];
// const nomlar = toplam4.map((element) => element.nomi);
// console.log(nomlar); 













// array reduce()





// const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const yigindi = t.reduce((accumulator, current) => accumulator + current, 0);
// console.log(yigindi); 







// const b = [1, 2, 3, 4, 5];
// const kopaytma = b.reduce((accumulator, current) => accumulator * current, 1);
// console.log(kopaytma); 







// const a = [10, 5, 20, 8, 15];
// const engKatta = a.reduce((max, current) => (current > max ? current : max), 0);
// console.log(engKatta);







// const s = ['salom', 'dunyo', 'yaxshi'];
// const bir = s.reduce((accumulator, current) => accumulator + ' ' + current);
// console.log(bir);







// const f = [
//   { nomi: 'Ali', yosh: 25 },
//   { nomi: 'Vali', yosh: 30 },
//   { nomi: 'Asad', yosh: 20 },
// ];
// const yosh = toplam.reduce((accumulator, current) => accumulator + current.yosh, 0);
// console.log(yosh);















//for/of



// const lam = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const element of lam) {
//   console.log(element);
// }





// const to = ['salom', 'hayr', 'bugun', 'yaxshi'];
// for (const element of to) {
//   console.log(element);
// }






// const matn = 'Hello';
// for (const harf of matn) {
//   console.log(harf);
// }






// const top = new Set([1, 2, 3, 4, 5]);
// for (const element of top) {
//   console.log(element);
// }





// const t = new Map();
// t.set('nom', 'Ali');
// t.set('yosh', 25);
// t.set('manzil', 'Toshkent');
// for (const [kalit, qiymat] of t) {
//   console.log(`${kalit}: ${qiymat}`);
// }












//arrow function


// const so = [1, 2, 3, 4, 5];
// const kvadratlar = so.map((son) => son * son);
// console.log(kvadratlar); 







// const matnlar = ['salom', 'dunyo', 'yaxshi'];
// const kattaHarflar = matnlar.map((matn) => matn.toUpperCase());
// console.log(kattaHarflar); 






// const sonlar = [1, 2, 3, 4, 5];
// const yigindi = sonlar.reduce((accumulator, current) => accumulator + current, 0);
// console.log(yigindi); 







// const tek = (raqam) => {
//   if (raqam % 2 === 0) {
//     return 'Juft son';
//   } else {
//     return 'Toq son';
//   }
// };
// console.log(tek(7)); 
// console.log(tek(12)); 









// const toplam = [
//   { nomi: 'Ali', yosh: 25 },
//   { nomi: 'Vali', yosh: 30 },
//   { nomi: 'Asad', yosh: 20 },
// ];

// const yosh = toplam.filter((obyekt) => obyekt.yosh > 25);
// console.log(yosh);
