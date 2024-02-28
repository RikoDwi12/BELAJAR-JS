var dataHp = []; //membuat variabel array kosong
var unitHp = /** @class */ (function () {
    function unitHp() {
        this.nama,
            this.ram,
            this.toko;
    }
    unitHp.prototype.input = function (nama, ram, toko) {
        this.nama = nama,
            this.ram = ram,
            this.toko = toko;
        dataHp.push({
            nama: this.nama,
            ram: this.ram,
            toko: this.toko
        });
    };
    unitHp.prototype.get = function () {
        console.log(dataHp);
    };
    unitHp.prototype.update = function (index, nama, ram, toko) {
        dataHp[index].nama = nama,
            dataHp[index].ram = ram,
            dataHp[index].toko = toko;
        console.log("Datanya ter update");
    };
    unitHp.prototype.delete = function (index) {
        dataHp.splice(index, 1);
    };
    return unitHp;
}());
var Hp1 = new unitHp();
Hp1.input("Samsung", 4, "Semarang");
Hp1.input("Iphone", 6, "Solo");
Hp1.input("Asus", 2, "Mangkang");
Hp1.input("Xiaomi", 8, "Wonosobo"); //menambahkan data
Hp1.get();
Hp1.update(1, "infinix", 5, "Bali"); // mengupdate data array ke 1,
Hp1.get();
Hp1.delete(0);
Hp1.get();
