var namaHewann = ["semut", "dino", "badak", "kodok", "kelinci", "kanguru"];
var jumlah = 0;
var hewanHurufK = "";
function jumlahh() {
    // console.log("nanana");
    for (var i = 0; i < namaHewann.length; i++) {
        if (namaHewann[i].charAt(0) === 'k') {
            hewanHurufK += namaHewann[i] + ", ";
            jumlah += 1;
        }
    }
    console.log("Nama hewan berawal huruf k ".concat(hewanHurufK));
}
// console.log(namaHewann.sort())
jumlahh();
console.log("Total hewan huruf K = ", jumlah);
// let namaHp : string[] = ["Samsung","oppo","infinix","ip","Sinar"]
// for (let i = 0; i < namaHp.length; i++) {
//     if (namaHp[i].charAt(0).toLowerCase() === 's') {
//         console.log(namaHp[i]);
//     }
// }
