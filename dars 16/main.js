// let vaqt = new Date().getHours();

// let najotTalimgaBorish = false;

// if (vaqt >=14){
//     najotTalimgaBorish = true;
// }else if(vaqt >=16){
//     najotTalimgaBorish = false;
// }


// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (najotTalimgaBorish){
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         }else{
//             reject('err')
//         }
//         })
// }


// order(1000, () => console.log('Najot talimga Borish'))
// .then(() => {
//     return order(1000, () => console.log('Boshladik'))
// })
// .then(() => {
//     return order(1000, () => console.log('12:30 da uydan chiqaman'))
// })
// .then(() =>{
//         return order(1000, () => console.log('avtobus bekatigacha 20 minut yuraman'))
//     })
// .then(() => {
//     return order(1000, () => console.log('12:50 da avtobusga chiqaman'))
// })
// .then(() => {
//     return order(1000, () => console.log('avtobusda metrogacha 15 minut yuraman'))
// })
// .then(() => {
//     return order(1000, () => console.log('13:05 da metroga chiqaman'))
// })
// .then(() => {
//     return order(1000, () => console.log('metroda 30 daqiqa yuraman'))
// })
// .then(() =>{
//     return order(1000, () => console.log('13:35 da Najot Talimga eng yaqin bolgan Mirzo Ulugbek metrosidan chiqaman'))
// })
// .then(() =>{
//     return order(1000, () => console.log('Najot Talimgacha 15 minut piyoda yuraman'))
// })
// .then(() => {
//     return order(1000, () => console.log('13:50 da Najot Talimga kiraman'))
// })
// .then(() => {
//     return order(1000, () => console.log('va bizga dars boladigan honaga borib joylashaman'))
// })
// .then(() => {
//     return order(1000, () => console.log('14:00 da darsimiz boshlanadi'))
// })
// .then(() => {
//     return order(1000, () => console.log('shu tarzda 15:50 gacha darsimiz davom etadi'))
// })
// .then(() =>{
//     return order(1000, () => console.log('keyin 16:00 dan zalga chiqib mustaqil dars qilaman'))
// })
// .then(() =>{
//     return order(1000, () => console.log('Odatda 2 soat mustaqil dars qilaman Najot Talimda'))
// })
// .then(() => {
//     return order(1000, () => console.log('H'))
// })
// .then(() => {
//     return order(1000, () => console.log('Z'))
// })














let alifbo = (time, work) => {
    return new Promise((resolve, reject) => {
        
            setTimeout(() => {
                resolve(work())
            }, time)
    })
}


alifbo(1000, () => console.log('1  Aa'))
.then(() => {
    return alifbo(1000, () => console.log('2  Bb'))
})
.then(() => {
    return alifbo(1000, () => console.log('3  Cc'))
})
.then(() => {
    return alifbo(1000, () => console.log('4  Dd'))
})
.then(() => {
    return alifbo(1000, () => console.log('5  Ee'))
})
.then(() => {
    return alifbo(1000, () => console.log('6  Ff'))
})
.then(() => {
    return alifbo(1000, () => console.log('7  Gg'))
})
.then(() => {
    return alifbo(1000, () => console.log('8  Hh'))
})
.then(() => {
    return alifbo(1000, () => console.log('9  Ii'))
})
.then(() => {
    return alifbo(1000, () => console.log('10  Jj'))
})
.then(() => {
    return alifbo(1000, () => console.log('11  Kk'))
})
.then(() => {
    return alifbo(1000, () => console.log('12  Ll'))
})
.then(() => {
    return alifbo(1000, () => console.log('13  Mm'))
})
.then(() => {
    return alifbo(1000, () => console.log('14  Nn'))
})
.then(() => {
    return alifbo(1000, () => console.log('15  Oo'))
})
.then(() => {
    return alifbo(1000, () => console.log('16  Pp'))
})
.then(() => {
    return alifbo(1000, () => console.log('17  Qq'))
})
.then(() => {
    return alifbo(1000, () => console.log('18  Rr'))
})
.then(() => {
    return alifbo(1000, () => console.log('19  Ss'))
})
.then(() => {
    return alifbo(1000, () => console.log('20  Tt'))
})
.then(() => {
    return alifbo(1000, () => console.log('21  Uu'))
})
.then(() => {
    return alifbo(1000, () => console.log('22  Vv'))
})
.then(() => {
    return alifbo(1000, () => console.log('23  Ww'))
})
.then(() => {
    return alifbo(1000, () => console.log('24  Xx'))
})
.then(() => {
    return alifbo(1000, () => console.log('25  Yy'))
})
.then(() => {
    return alifbo(1000, () => console.log('26  Zz'))
})
