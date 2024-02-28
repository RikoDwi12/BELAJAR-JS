//let ok: any[] = [1,"2"];


// buatkan function logicAntrian(tambahAntrian:string,indexAntrianKeluar:number) jadi semisal index 0 pergi maka budi didepan dan jono cabut antrian lalu ketambahan dengan nama toni 

let antrian: any[] = ["tono","budi","jono"]

function pelayananAntri(){
    //splice
    //log antrian saat ini
    //hasil budi,jono
    antrian.splice(0,1)
    console.log(antrian);
}
pelayananAntri();

function jonoKeluarToniMasuk(){
    antrian[1]= "toni"
    console.log(antrian);
    
    //log budi toni
}
jonoKeluarToniMasuk()

/////////////////////////////////

// let numbers: number[] = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

let namaHewan :string[] = ["semut", "dino" ,"badak", "Kodok", "Kelinci", "Kanguru"]; //array didalam looping


function cekK() {


for(let i = 0; i < namaHewan.length; i++) {

    if (`${namaHewan[i].charAt(0)}` === 'k') {
        console.log(namaHewan[i]);
    }
    console.log(namaHewan[i]);
        
    
 }
}


cekK ()
console.log(namaHewan);
