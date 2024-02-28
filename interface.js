var hewan1 = {
    jenis: "gajah",
    jumlahKaki: 4,
    warnaKulit: "hitam"
};
var hewan2 = {
    jenis: "jerapah",
    jumlahKaki: 4,
    warnaKulit: "kuning"
};
var hewan3 = {
    jenis: "semut",
    jumlahKaki: 8,
    warnaKulit: "merah"
};
var habitat1 = {
    suhuUdara: 10,
    jenisHabitat: "savana",
};
function cekSuhuudara(suhu) {
    if (suhu >= 0 && suhu <= 12) {
        return 3;
    }
    else if (suhu > 12 && suhu <= 25) {
        return 5;
    }
    else if (suhu > 25) {
        return 8;
    }
    else {
        return 0;
    }
}
function cekJenisHabitat(jenishabitat) {
    if (jenishabitat === "savana") {
        return 3;
    }
    else if (jenishabitat === "tundra") {
        return 5;
    }
    else if (jenishabitat === "rawa") {
        return 8;
    }
    else {
        return 0;
    }
}
function cekJumlah(habitat) {
    var jumlah = cekSuhuudara(habitat.suhuUdara) + cekJenisHabitat(habitat.jenisHabitat);
    if (jumlah >= 0 && jumlah <= 5) {
        return "buruk";
    }
    else if (jumlah > 5 && jumlah <= 10) {
        return "baik";
    }
    else {
        return "tidak terdefinisi";
    }
}
function createHewan(hewan) {
    return "jenis hewannya adalah : ".concat(hewan.jenis, " jumlah kakinnya adalah : ").concat(hewan.jumlahKaki, " warnakulitnya adalah : ").concat(hewan.warnaKulit, " ");
}
// console.log(createHewan(hewan1));
console.log(createHewan(hewan1) + ' habitatnnya ' + cekJumlah(habitat1));
// console.log(createHewan(hewan3));
