// let arr : Hp [] = []
var arrHp = [
    { jenisHp: "xiaomi", ram: 12, toko: "jogja" },
    { jenisHp: "samsung", ram: 8, toko: "semarang" },
    { jenisHp: "experia", ram: 6, toko: "solo" },
    { jenisHp: "iphone", ram: 4, toko: "bali" }
];
// console.log(arrHp);
// function hurufF () {
//     for (let i = 0; i < arrHp.length; i ++) {
//         if (arrHp[i].jenisHp.includes('s')) {
//             console.log(arrHp);
//             arrHp = arr
//         }
//     }
// }
// hurufF(arr)
function hurufS() {
    var r = arrHp.filter(function (nama) { return nama.toko.includes('o'); });
    arrHp = r;
    console.log(arrHp);
}
console.log(arrHp);
hurufS();
