
let mahasiswa: any[] = [
    { nama: "riko", no: "716832" },
    { nama: "rizki", no: "1732912" }
];

let orangTua: any[] = [
    { nama: "jaya", no: "81973802" },
    { nama: "cipto", no: "821312312" }
];

let pendapatan:any[] = [
    {gaji : "satujuta"},
    {gaji : "duajuta"}
]

// Membuat array dataMahasiswa dan melakukan pemetaan
let dataMahasiswa: any[] = mahasiswa.map((mhs, index) => {
    return {
        namaMahasiswa: mhs.nama,
        noMahasiswa: mhs.no,
        namaOrtu: orangTua[index].nama,
        noOrtu: orangTua[index].no,
        gajinya: pendapatan[index].gaji
    };
});

console.log(dataMahasiswa);