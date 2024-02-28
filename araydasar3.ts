let arrbilanganAcak : number [] = [2, 35, 25, 75 , 27, 56, 67 ,12]

let arrDibawah50 : number [] = []
let arrDiatas50 : number [] = []

function cekBilangan () {
    const c = arrbilanganAcak.filter(angka => angka < 20)
    arrDibawah50 = c 

    const d = arrbilanganAcak.filter(angka => angka > 20)
    arrDiatas50 = d
}

console.log(arrbilanganAcak);
cekBilangan()
console.log(arrDiatas50);
console.log(arrDibawah50);



//{
    // var x = ''
//     for (var i = 0; i < arrbilanganAcak.length; i++) {
//         if (arrbilanganAcak[i] > 50) {
//             arrDiatas50.push(arrbilanganAcak[i])
            
//         }
//     else if (arrbilanganAcak[i] < 50) {
//         arrDibawah50.push(arrbilanganAcak[i])
//     }

//     }

// }

// console.log(arrDiatas50);

// function cekBilangan1 () {
//     for (var i = 0; i < arrbilanganAcak.length; i++) {
//         if (arrbilanganAcak[i] < 50) {
//             arrDibawah50.push(arrbilanganAcak[i])
//             // console.log(arrbilanganAcak[i]);
            
//         }
//     }
// }
// console.log(arrDiatas50);

//  cekBilangan()
//  console.log(`array diatas 50 adalah ${arrDiatas50}`);
// //  cekBilangan1()
//  console.log(arrDibawah50);
 
 



