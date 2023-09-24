

// switch case

// let day = Number(prompt(''));
// // let day = 1;

// switch (day) {
//     case 1:
//         console.log('du');
//         break;
//     case 2:
//         console.log('se');
//         break;
//     case 3:
//         console.log('cho');
//         break;
//     case 4:
//         console.log('pa');
//         break; 
//     case 5:
//             console.log('ju');
//             break; 
//     case 6:
//         console.log('sha');
//         break; 
//     case 7:
//         console.log('ya');
//         break; 
//     // default:
//     //     console.log(false);                   
// }





// 1-masala


// function XO(str) {
//     
//   const xCount = str.split('x').length-1;
//   const oCount = str.split('o').length-1;
  
//   return xCount === oCount;
// }

// console.log(XO("ooxx"));
// console.log(XO("xoxo"));
// console.log(XO("xooxx"));













// 2-masala


// function accum(s) {
//     let text = s.split("");
//     let str = "";
//     for (let i = 0; i < text.length; i++) {
//         for(let j = 0; j <= i; j++) {
//             if(j==0) {
//             str += text[i].toUpperCase();
//             }else{
//                 str += text[i].toLowerCase();
//             }
//         }

//         if(i != text.length-1){
//             str += "-";
//         }

//     }

//     console.log(str);
//     return str;
// }

// accum("abcd");











// qushimcha ustoz tashagan masalalar


// 1-masala



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