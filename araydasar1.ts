let namaHewann: string[] = ["semut", "dino", "badak", "kodok", "kelinci", "kanguru"];
var jumlah = 0
var hewanHurufK = ""


function jumlahh () {
    // console.log("nanana");
    
    for (let i = 0; i < namaHewann.length; i++) {
    
        if (namaHewann[i].charAt(0) === 'k') {
            hewanHurufK += namaHewann[i] + ", "
            jumlah += 1
        }  
    }
    console.log(`Nama hewan berawal huruf k ${hewanHurufK}`);
}
// console.log(namaHewann.sort())
jumlahh()
console.log("Total hewan huruf K = ", jumlah)
