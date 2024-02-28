var DataMahasiswa = [];
var DataOrangtua = [];
var DataMapping = [];
var Mahasiswa = /** @class */ (function () {
    function Mahasiswa() {
        this.nama = "",
            this.nim = "";
        this.namaOrtu = "";
        this.alamat = "";
    }
    Mahasiswa.prototype.input = function (nama, nim) {
        this.nama = nama,
            this.nim = nim;
        DataMahasiswa.push({
            nama: this.nama,
            nim: this.nim
        });
    };
    Mahasiswa.prototype.inputMapping = function (namaMahasiswa, nim, namaOrtu, alamat) {
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
            mahasiswa: { nama: this.nama,
                nim: this.nim },
            orangtua: {
                namaOrtu: this.namaOrtu,
                alamat: this.alamat,
            }
        });
    };
    Mahasiswa.prototype.get = function () {
        console.log(DataMahasiswa);
    };
    Mahasiswa.prototype.getMap = function () {
        console.log(DataMapping);
    };
    // getByIndex(index: number): void {
    //     console.log(DataMahasiswa[index])
    // }
    Mahasiswa.prototype.update = function (index, nama, nim) {
        DataMahasiswa[index].nama = nama,
            DataMahasiswa[index].nim = nim,
            console.log("Data Updated");
    };
    Mahasiswa.prototype.delete = function (index) {
        DataMahasiswa.splice(index, 1);
    };
    return Mahasiswa;
}());
var Mahasiswa1 = new Mahasiswa();
Mahasiswa1.input("Riko", "A11");
Mahasiswa1.input("Wibowo", "A11");
Mahasiswa1.get();
Mahasiswa1.input("Alrico", "A11");
Mahasiswa1.get();
Mahasiswa1.update(0, "Saiyan", "A11");
Mahasiswa1.get();
Mahasiswa1.delete(1);
Mahasiswa1.get();
Mahasiswa1.inputMapping("Jaya", "A11", "Ortu Jaya", "alamat");
Mahasiswa1.inputMapping("bowo", "A12", "Ortu bowo", "alamat");
Mahasiswa1.getMap();
console.log(DataMapping[0].mahasiswa.nama);
console.log(DataMapping[0].orangtua.namaOrtu);
console.log(DataMapping[1].mahasiswa.nama);
console.log(DataMapping[1].orangtua.namaOrtu);
// Mahasiswa1.getByIndex(1)
