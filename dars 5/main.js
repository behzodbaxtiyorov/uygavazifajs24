// 1-masala: n butun soni berilgan (1 <= n <= 26). Lotin alfavitidagi dastlabki n ta katta harflarni chiqaruvchi programma tuzilsin.

// function Letters(n) {
//     const startCharCode = 'a'.charCodeAt(0);
  
//     for (let i = 0; i < n; i++) {
//       const letter = String.fromCharCode(startCharCode + i);
//       console.log(letter);
//     }
//   }
  
//   const n = parseInt(prompt('n dan (1-26):'));
  
//   if (isNaN(n) ||  n < 1 ||  n > 26) {
//     console.log('.');
//   } else {
//     Letters(n);
//   }










// 2-masala: Kiritilgan belgining nimaligini aniqlovchi programma tuzilsin. Agar kiritilgan belgi raqam bo'lsa - "digit", lotincha harf bo'lsa - "lotin" yozuvi chiqarilsin. Boshqa xolatlar uchun nol chiqarilsin.

//   let belgi = prompt("");
//   let Turi = Aniqla(belgi);

// function Aniqla(belgi) {
//     if (!isNaN(belgi)) {
//       return "digit";
//     } else if (/^[a-zA-Z]+$/.test(belgi)) {
//       return "lotin";
//     } else {
//       return "nol";
//     }
//   }
  

//   console.log(Turi);







// 3-masala: Satr beilgan. Satrning birinchi va oxirgi belgisini UTF-16 jadvalidagi kodini chiqaruvchi programma tuzilsin.

//   let satr = prompt("");
//   let utf16Kodlari = utf16Kodi(satr);

// function utf16Kodi(satr) {
//     let birinchi = satr.charCodeAt(0);
//     let oxirgi = satr.charCodeAt(satr.length - 1);
//     return {
//       birinchi: birinchi,
//       oxirgi: oxirgi
//     };
//   }
  

//   console.log("Birinchi: " + utf16Kodlari.birinchi);
//   console.log("Oxirgi: " + utf16Kodlari.oxirgi);







// 4-masala:  N natural soni va belgi berilgan. N ta kiritilgan belgidan iborat satr hosil qiling va ekranga chiqaring. Masalan: N = 5; Belgi = 'A'; Natija = AAAAA

//   let n = parseInt(prompt("N:"));
//   let belgi = prompt("Belgi:");
//   let natija = satr(n, belgi);

// function satr(n, belgi) {
//     let satr = belgi.repeat(n);
//     return satr;
//   }
  

//   console.log(natija);








// 5-masala: Kiritilgan satrni teskari tartibda chiqaruvchi programma tuzilsin

//   let satr = prompt("");
//   let Satr = teskari(satr);

// function teskari(satr) { 
//     let teskariSatr = "";
//     for (let i = satr.length - 1; i >= 0; i--) {
//       teskariSatr += satr[i];
//     }
//     return teskariSatr;
//   }
  

//   console.log( Satr);








// 6-masala: Satr va N natural soni berilgan. Shu satr belgilari orasiga N tadan "*" belgisi qo’yib yangi satr qaytaruvchi getStringStars(N) nomli funksiya tuzilsin.

//   let satr = prompt("Satrni kiriting:");
//   let N = parseInt(prompt("N natural sonini kiriting:"));
//   let yangi = getStringStars(satr, N);

// function getStringStars(satr, N) {
//     let yangi = "";
//     for (let i = 0; i < satr.length; i++) {
//       yangi += satr[i];
//       for (let j = 0; j < N; j++) {
//         yangi += "*";
//       }
//     }
//     return yangi;
//   }
  

//   console.log( yangi);









// 7-masala:Satr berilgan. Satrdagi raqamlar sonini aniqlovchi programma tuzilsin. (for of va isNaN dan foydalaning !)

//   let satr = prompt("");
//   let soni = raqamlar(satr);

// function raqamlar(satr) {
//     let raqam = 0;
//     for (let belgi of satr) {
//       if (!isNaN(belgi)) {
//         raqam++;
//       }
//     }
//     return raqam;
//   }
  

//   console.log( soni);










// 8-masala: Satr berilgan. Satrdagi kichik lotin va kirill harflarining umumiy sonini aniqlovchi programma tuzilsin.

//   let satr = prompt("");
//   let soni = harflarSon(satr);

// function harflarSon(satr) {
//     let harf = 0;
//     for (let belgi of satr) {
//       if ((belgi >= 'a' && belgi <= 'z') || (belgi >= 'а' && belgi <= 'к')) {
//         harf++;
//       }
//     }
//     return harf;
//   }
  

//   console.log( soni);









// 9-masala: Satr berilgan. Satrdagi xamma katta lotin harflari kichigiga almashtiruvchi programma tuzilsin.


//   let satr = prompt("Katta harf kiriting:");
//   let yangiSatr = kattaniKichikka(satr);

// function kattaniKichikka(satr) {
//     let yangiSatr = "";
//     for (let belgi of satr) {
//       if (belgi >= 'A' && belgi <= 'Z') {
//         yangiSatr += belgi.toLowerCase();
//       } else {
//         yangiSatr += belgi;
//       }
//     }
//     return yangiSatr;
//   }
  

//   console.log( yangiSatr);







// 10-masala:Satr berilgan. Satrdagi xamma katta harflarini kichigiga, kichiklarini kattasiga almashtiruvchi programma tuzilsin.

//   let satr = prompt("Katta va kichik harflar kirgizing:");
//   let Satr = harflarniAlmashtiruvchi(satr);

// function harflarniAlmashtiruvchi(satr) {
//     let Satr = "";
//     for (let belgi of satr) {
//       if (belgi >= 'A' && belgi <= 'Z') {
//         Satr += belgi.toLowerCase();
//       } else if (belgi >= 'a' && belgi <= 'z') {
//         Satr += belgi.toUpperCase();
//       } else {
//         Satr += belgi;
//       }
//     }
//     return Satr;
//   }
  

//   console.log(Satr);









// 11-masala: Satr berilgan. Agar satrda butun son ifodalangan bo'lsa 1 chiqarilsin, agar haqiqiy son bo'lsa 2 chiqarilsin. Agar satrni songa aylantirish imkoni bo'lmasa 0 chiqarilsin. Haqiqiy sonning kasr qismi nuqta "." Bilan ajratilgan deb qabul qilinsin.

// let satr = prompt("Satrni kiriting:");
// let natija = son(satr);

// function son(satr) {
//     if (/^\d+$/.test(satr)) {
//       return 1;
//     } else if (/^\d+(\.\d+)?$/.test(satr)) {
//       return 2;
//     } else {
//       return 0;
//     }
//   }
  
  
//   console.log("Natija: " + natija);


// mana shu masala ozggina qiyin boldi











// 12-masala: Berilgan n sonni teskarisiga almashtiruvchi getInverseNumber(n) nomli funksiya tuzing.

// let n = par(prompt(""));
// let teskariSon = getInverseNumber(n);

// function getInverseNumber(n) {
//     let teskari = 0;
//     while (n !== 0) {
//       teskari = teskari * 10 + (n % 10);
//       n = Math.floor(n / 10);
//     }
//     return teskari;
//   }
  
  
//   console.log(teskariSon);


// bu masalani markazda bir bolani yordami bilan qildim "while"ni birinchi marta ishlatishim











// 13-masala:  "son ± son±... ± son" ko'rinishidagi arifmetik ifodani bildiruvchi satr berilgan. "+" belgisi o'rnida yo "+" yoki "-" bo'ladi. (Masalan: 7 + 3 - 2) Ifodaning qiymatini aniqlovchi programma tuzilsin. (son o'rnida butun son kiritiladi)

// let satr = prompt("ifodani kiriting:");
// let qiymat = arifmet(satr);

// function arifmet(satr) {
//     let ifoda = satr.replace(/\s/g, ''); 
//     let sonlar = ifoda.split(/[+\-]/).map(Number);
//     let amallar = ifoda.match(/[+\-]/g);
  
//     let plus = sonlar[0]; 
  
//     for (let i = 1; i < sonlar.length; i++) {
//       if (amallar[i-1] === '+') {
//         plus += sonlar[i];
//       } else {
//         plus -= sonlar[i];
//       }
//     }
  
//     return netice;
//   }
  
  
//   console.log( qiymat);











// 14-masala:N1, N2 natural sonlari va S1, S2 satr berilgan. S1 satrning dastlabki N1 ta belgisidan va S2 satrning oxirgi N2 ta belgisidan iborat yangi satr hosil qiling.

// let N1 = parseInt(prompt("N1 ni kiriting:"));
// let N2 = parseInt(prompt("N2 ni kiriting:"));
// let S1 = prompt("S1 ni kiriting:");
// let S2 = prompt("S2 ni kiriting:");
  
// let yangiSatr = yangiSoz(N1, N2, S1, S2);

// function yangiSoz(N1, N2, S1, S2) {
//     let yangiSatr = S1.substring(0, N1) + S2.substring(S2.length - N2);
//     return yangiSatr;
//   }
  
  
//   console.log( yangiSatr);












// 15-masala:C belgisi va S satri berilgan. S satrida uchragan har bir C belgisini 2 marta orttiruvchi programma tuzilsin.

// let S = prompt("Satrni kiriting:");
// let Satr = orttiruvchi(S);

// function orttiruvchi(S) {
//     let Satr = '';
//     for (let belgi of S) {
//       if (belgi === 'C') {
//         Satr += 'CC';
//       } else {
//         Satr += belgi;
//       }
//     }
//     return Satr;
//   }
  
  
//   console.log( Satr);









// 16-masala: C belgisi va S1, S2 satrlari berilgan. S1 satriga shu satrda uchragan har bir C belgisidan oldin S2 satrini qo'shuvchi programma tuzilsin.

// let S1 = prompt("S1 ni kiriting:");
// let S2 = prompt("S2 ni kiriting:");
  
// let yangi = cdanOldin(S1, S2);
// function cdanOldin(S1, S2) {
//     let yangi = '';
//     for (let i = 0; i < S1.length; i++) {
//       if (S1[i] === 'C') {
//         yangi += S2 + S1[i];
//       } else {
//         yangi += S1[i];
//       }
//     }
//     return yangi;
//   }
  
  
//   console.log(yangi);












// 22-masala: Probel bilan ajratilgan va faqat katta harflar bilan terilgan o'zbekcha so'zlardan iborat satr berilgan. Satrdagi bir xil harflar bilan boshlanuvchi va tugovchi so'zlar sonini aniqlovchi programma tuzilsin.


// let satr = prompt("Satrni kiriting:");
// let son = harflarSoni(satr);
// function harflarSoni(satr) {
//     let sozlar = satr.split(" ");
//     let say = 0;
//     for (let soz of sozlar) {
//       if (soz.length >= 2 && soz[0] === soz[soz.length - 1] && soz[0] === soz[0].toUpperCase()) {
//         say++;
//       }
//     }
  
//     return say;
//   }
  
  
//   console.log("So'zlar soni: " + son);











// 27-masala: Satr berilgan. Satrdagi tinish belgilari sonini chiqaruvchi programma tuzilsin.marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"]

// let satr = prompt("Satrni kiriting:");
// let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
// let son = tinish(satr, marks);

// function tinish(satr, belgilar) {
//     let say = 0;
//     for (let belgi of belgilar) {
//       let belgiSay = 0;
//       for (let harf of satr) {
//         if (harf === belgi) {
//           belgiSay++;
//         }
//       }
//       say += belgiSay;
//     }
//     return say;
//   }
  
  
//   console.log("Tinish belgilari soni: " + son);











// 28-masala: Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan faylning nomini (kengaytmasiz) aniqlovchi programma tuzilsin.Input: D:/Qudrat_c++/books/My_book.exeOutput: My_book


// let satr = prompt("Satrni kiriting:");
// let faylNomi = fayl(satr);
// function fayl(satr) {
//     let dos = satr.split("/").pop(); 
//     let uzan = dos.lastIndexOf("."); 
//     let faylNomi = dos.substring(0, uzan); 
//     return faylNomi;
//   }
  
  
//   console.log(faylNomi);











// 29-masala:Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan faylning kengaytmasini aniqlovchi programma tuzilsin.Input: D:/Qudrat_c++/books/My_book.exeOutput: exe


// let satr = prompt("Satrni kiriting:");
// let kengaytma = ken(satr);
// function ken(satr) {
//     let Adi = satr.split("/").pop();
//     let Index = Adi.lastIndexOf("."); 
//     let kengaytma = Adi.substring(Index + 1);
//     return kengaytma;
//   }
  
  
//   console.log("Kengaytma: " + kengaytma);









// 30-masala:  Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan oxirgi papka nomini aniqlovchi programma tuzilsin. Agar papka tub bo'lsa (корневой), "/" belgisi chiqarilsinInput: D:/Qudrat_c++/books/My_book.exeOutput: books

// let satr = prompt("Satrni kiriting:");
// let oxirgiPapkaNomi = oxirgiP(satr);
// function oxirgiP(satr) {
//     let parcalar = satr.split("/");
//     let oxirgiPapka = parcalar[parcalar.length - 2]; 
    
//     if (oxirgiPapka === "") {
//       oxirgiPapka = "/";
//     }
    
//     return oxirgiPapka;
//   }
  
  
//   console.log("Oxirgi papka nomi: " + oxirgiPapkaNomi);

