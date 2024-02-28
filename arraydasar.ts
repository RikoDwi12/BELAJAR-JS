let arr: number[] = [1,2,3];
let aB : number = 4
arr.push(aB) // Menambah variabel array paling belakang
console.log(arr); // [ 1, 2, 3, 4 ]

arr.unshift(aB) // Menambah variabel array paling depan
console.log(arr); // [ 4, 1, 2, 3, 4 ]
arr[1] = 3 // UPDATE

console.log(arr) // [ 4, 3, 2, 3, 4 ]

arr.splice(1,1) // Menghapus angka parameter pertama start from,mau dihapus brapa
console.log(arr); // [ 4, 2, 3, 4 ]

//============================================================================//

let arrayKu: number[] = [1,2,3,4,5,6]

console.log(arrayKu[2]);

///=================================TASK
//  Buatkan array berisi string nama nama hewan (3 hewan) kemudian buatkan function setHewan(namaHewan:string) untuk menambahkan nama hewan  dan function getHewan() menampilkan semua hewan


let namaHewanArr : string[] = ["wedus","sapi","kebo"];

function setHewan(namaHewan:string) { // nambah
    namaHewanArr.push(namaHewan)  
}

function unshiftHewan(namaHewan:string) {
    namaHewanArr.unshift ("dinamo")
}

function UPDATE(index :number ,namaHewan:string) { //ganti
    namaHewanArr[index] = namaHewan
}
function DeleteHewan(index:number, until:number ) { //menghapus index,value ny
    namaHewanArr.splice(index,until)
}
function getHewan(){
    return namaHewanArr
}
setHewan("KOMODO")
console.log(getHewan());


///////////////////////////////////////////////////////////////////////////

let namaHparr : string[] = ["samsung","xiaomi","ip","lenovo"];
// console.log(namaHparr[1]);  //menampilakn array yang ke 1
// let tambah : string = "infinix"

function tambahHp(namaHp:string) {
    namaHparr.push(namaHp) //menambahkan array di belakang
}
tambahHp("infinix") 
console.log(namaHparr);
// namaHparr.push(tambah) 
// console.log(namaHparr);

function tambahHpDepan(namaHp:string) {
    namaHparr.unshift(namaHp) //menambahkan array didepan
}
tambahHpDepan("Hp tambah ")
console.log(namaHparr); 

function updateHp(index :number,namaHp:string) {
    namaHparr[index] = namaHp //yang mau diupdate arayke berapa
}
namaHparr[2] = "ini hp update"
console.log(namaHparr); 

function deleteHp(index:number , until) {
    namaHparr.splice(index,until) //menghapusnya mulai dari mana dan berapa yang mau dihapus
}
deleteHp(0,3)
console.log(namaHparr); 

//ini tanpa function
let namaSepatu : string[] = ["adidas","nike","vans","diadora"]
namaSepatu.push("swalow")
console.log(namaSepatu);
namaSepatu.unshift("zara")
console.log(namaSepatu);
namaSepatu[1] = "ini yang di update"
console.log(namaSepatu);
namaSepatu.splice(1,2)
console.log(namaSepatu);





// let namaLaptopArr : string[] = ["asus","lenovo","hp"];

// function setLaptop(namaLaptop:string) {
//     namaLaptopArr.push(namaLaptop)
// }
// // setLaptop("diri")
// // console.log(namaLaptopArr)

// function UpdateLaptop(index:number, namaLaptop:string) {
//     namaLaptopArr[index] = namaLaptop
// }
//     // namaLaptopArr[1] = "biri"
//     // console.log(namaLaptopArr);
    
// function DeleteLaptop(index:number , until:number) {
//     namaLaptopArr.splice(index,until)
// }
//     // namaLaptopArr.splice(1,1) 
//     // console.log(namaLaptopArr);
    



