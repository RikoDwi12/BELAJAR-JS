interface Kendaraan {
    tproduksi: number,
    kbahanbakar: number,
}

function kelayakanKendaraan(statusKendaraan: Kendaraan) {


    if (statusKendaraan.tproduksi < 1990 && statusKendaraan.kbahanbakar < 20) {
        return "kondisi tidak aman"
    }
    else if (statusKendaraan.tproduksi > 1990 && statusKendaraan.kbahanbakar > 20) {
        return "kondisi baik"
    }
    else if (statusKendaraan.tproduksi < 1990 && statusKendaraan.kbahanbakar > 20) {
        return "kondisi dalam pengawasan"
    }
    else if (statusKendaraan.tproduksi > 1990 && statusKendaraan.kbahanbakar < 20) {
        return "kondisi dalam pengawasan"
    }
    else {
        return "tidak ada"
    }

}

const Kendaraan1 = {
    tproduksi: 1945,
    kbahanbakar: 25,
}
const Kendaraan2 = {
    tproduksi: 2000,
    kbahanbakar: 26,
}
const Kendaraan3 = {
    tproduksi: 1920,
    kbahanbakar: 10,
}
const Kendaraan4 = {
    tproduksi: 2000,
    kbahanbakar: 10,
}

console.log(kelayakanKendaraan(Kendaraan1));
console.log(kelayakanKendaraan(Kendaraan2));
console.log(kelayakanKendaraan(Kendaraan3));
console.log(kelayakanKendaraan(Kendaraan4));