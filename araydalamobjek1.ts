interface MahasiswaInterface{
    nama : string,
    nim : string
}
interface OrangtuaInterface{
    namaOrtu: string,
    alamat: string
}
interface DataMappingInterface {
    mahasiswa: MahasiswaInterface;
    orangtua: OrangtuaInterface;
}

let DataMahasiswa : MahasiswaInterface[] = []
let DataOrangtua : OrangtuaInterface[] = []
let DataMapping : DataMappingInterface[] = []

class Mahasiswa{
    nama : string;
    nim : string;
    namaOrtu : string;
    alamat : string;
    constructor(){
        this.nama = "",
        this.nim = ""
        this.namaOrtu = ""
        this.alamat = ""
    }
    input(nama : string, nim : string): void{
        this.nama= nama,
        this.nim = nim
        DataMahasiswa.push({
            nama : this.nama,
            nim  : this.nim
        })
    }
    inputMapping(namaMahasiswa: string, nim: string, namaOrtu: string, alamat: string): void {
        this.nama = namaMahasiswa;
        this.nim = nim;
        this.namaOrtu = namaOrtu;
        this.alamat = alamat;

        // DataMahasiswa.push({
        //     nama: this.nama,
        //     nim: this.nim,
        // });

        // DataOrangtua.push({
        //     namaOrtu: this.namaOrtu,
        //     alamat: this.alamat,
        // });

        DataMapping.push({
            mahasiswa:{nama: this.nama,
            nim: this.nim},
            orangtua :{
                namaOrtu: this.namaOrtu,
                alamat: this.alamat,
            }
        });
    }
    get(): void {
        console.log(DataMahasiswa)
    }
    getMap(): void{
        console.log(DataMapping)
    }
    // getByIndex(index: number): void {
    //     console.log(DataMahasiswa[index])
    // }
    update(index: number,nama:string,nim:string): void{
        DataMahasiswa[index].nama = nama,
        DataMahasiswa[index].nim = nim,
        console.log("Data Updated");
    }
    delete(index: number){
        DataMahasiswa.splice(index,1)
    }
    
}

const Mahasiswa1 = new Mahasiswa()
Mahasiswa1.input("Riko","A11")
Mahasiswa1.input("Wibowo","A11")
Mahasiswa1.get()
Mahasiswa1.input("Alrico","A11")
Mahasiswa1.get()
Mahasiswa1.update(0,"Saiyan","A11")
Mahasiswa1.get()
Mahasiswa1.delete(1)
Mahasiswa1.get()
Mahasiswa1.inputMapping("Jaya","A11","Ortu Jaya","alamat")
Mahasiswa1.inputMapping("bowo","A12","Ortu bowo","alamat")
Mahasiswa1.getMap()

console.log(DataMapping[0].mahasiswa.nama)
console.log(DataMapping[0].orangtua.namaOrtu)
console.log(DataMapping[1].mahasiswa.nama)
console.log(DataMapping[1].orangtua.namaOrtu)
// Mahasiswa1.getByIndex(1)

