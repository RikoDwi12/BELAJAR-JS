interface mahasiswa{
    nama : string,
    nim : string,
    prodi : string
}
let ArrayOfObject : mahasiswa[] = 
            [
                {
                    nama : "Alrico Rizki Wibowo",
                    nim : "11.2020.12703",
                    prodi : "TI"
                },
                {
                    nama : "Riko Dwijaya",
                    nim : "AaaNim Oke",
                    prodi : "TI"
                },
                {
                    nama : "Arya",
                    nim : "18888",
                    prodi : "hhhhh"
                },
                {
                    nama : "sinaa",
                    nim : "hhuhh",
                    prodi : "NNN"
                }
            ]

// let hurufO : mahasiswa [] = []
// console.log(ArrayOfObject[0].nama);  // Nama array [index].key
// console.log(ArrayOfObject[1].nama);
// console.log(ArrayOfObject[0].nama , ArrayOfObject[0].nim , ArrayOfObject[0].prodi);
// ArrayOfObject[0].nama = "Silvianita" // sudah diupate
// console.log(ArrayOfObject[0].nama);  // Nama array [index].key

ArrayOfObject.push({
    nama:"Silvianita",
    nim: "A11",
    prodi: "Fkes"
})

console.log(ArrayOfObject);


function hurufR() {
    const rObjects = ArrayOfObject.filter(mahasiswa => mahasiswa.nama.includes('o'));
    return rObjects;
}

const rObjects = hurufR();
console.log(rObjects);

function hurufAA(){
    const a = ArrayOfObject.filter(mahasiswa => mahasiswa.nim.charAt(0) === ('A'));
    return a;
}

const a = hurufAA();
console.log(a);



// function cariHurufR() {
//     const mahasiswaHurufR = ArrayOfObject.filter(mahasiswa =>
//         mahasiswa.nama.toLowerCase().includes('r')
//     );

//     return mahasiswaHurufR;
// }

// const mahasiswaDenganR = cariHurufR();
// console.log(mahasiswaDenganR);
// function carihurufO () {
//     const hurufO = ArrayOfObject.filter(huruf =>huruf.nama.charAt(0) === ('A'))

//     ArrayOfObject = hurufO
// }

// cariHurufR()


