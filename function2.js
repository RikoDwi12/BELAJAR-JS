function kelayakanKendaraan(statusKendaraan) {
    if (statusKendaraan.tproduksi < 1990 && statusKendaraan.kbahanbakar < 20) {
        return "kondisi tidak aman";
    }
    else if (statusKendaraan.tproduksi > 1990 && statusKendaraan.kbahanbakar > 20) {
        return "kondisi baik";
    }
    else if (statusKendaraan.tproduksi < 1990 && statusKendaraan.kbahanbakar > 20) {
        return "kondisi dalam pengawasan";
    }
    else if (statusKendaraan.tproduksi > 1990 && statusKendaraan.kbahanbakar < 20) {
        return "kondisi dalam pengawasan";
    }
    else {
        return "tidak ada";
    }
}
var Kendaraan1 = {
    tproduksi: 1945,
    kbahanbakar: 25,
};
var Kendaraan2 = {
    tproduksi: 2000,
    kbahanbakar: 26,
};
var Kendaraan3 = {
    tproduksi: 1920,
    kbahanbakar: 10,
};
var Kendaraan4 = {
    tproduksi: 2000,
    kbahanbakar: 10,
};
console.log(kelayakanKendaraan(Kendaraan1));
console.log(kelayakanKendaraan(Kendaraan2));
console.log(kelayakanKendaraan(Kendaraan3));
console.log(kelayakanKendaraan(Kendaraan4));
