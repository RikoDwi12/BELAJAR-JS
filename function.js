function layakHp(statusHp) {
    if (statusHp.ram < 2 && statusHp.tproduksi <= 2010) {
        return "maka hp jadul";
    }
    else if (statusHp.ram <= 4 && statusHp.tproduksi <= 2015) {
        return "maka hp biasa";
    }
    else if (statusHp.ram <= 6 && statusHp.tproduksi <= 2020) {
        return "maka hp kekinian";
    }
    else if (statusHp.ram >= 8 && statusHp.tproduksi > 2020) {
        return "maka hp jama now";
    }
    else {
        return "tidak terdifinisi";
    }
}
var hp1 = {
    ram: 1,
    tproduksi: 2009,
};
var hp2 = {
    ram: 4,
    tproduksi: 2014
};
var hp3 = {
    ram: 6,
    tproduksi: 2019,
};
var hp4 = {
    ram: 8,
    tproduksi: 2022,
};
var hp5 = {
    ram: 0,
    tproduksi: 20,
};
var hp6 = {
    ram: 2,
    tproduksi: 2020,
};
console.log(layakHp(hp1));
console.log(layakHp(hp2));
console.log(layakHp(hp3));
console.log(layakHp(hp4));
console.log(layakHp(hp5));
console.log(layakHp(hp6));
console.log("\n");
function jumlahKaki(statusKaki) {
    if (statusKaki.kaki >= 0 && statusKaki.kaki <= 5) {
        return "hewan berkaki 0-5";
    }
    else if (statusKaki.kaki > 5 && statusKaki.kaki <= 10) {
        return "hewan berkaki 6-10";
    }
    else if (statusKaki.kaki > 10 && statusKaki.kaki <= 20) {
        return "hewan berkaki 11-20";
    }
    else {
        return "tak terdefinisi";
    }
}
var hewan1 = {
    kaki: 4
};
var hewan2 = {
    kaki: 6
};
var hewan3 = {
    kaki: 12
};
var hewan4 = {
    kaki: 25
};
console.log(jumlahKaki(hewan1));
console.log(jumlahKaki(hewan2));
console.log(jumlahKaki(hewan3));
console.log(jumlahKaki(hewan4));
console.log("\n");
function tentangBaju(statusBaju) {
    if (statusBaju.size <= 2 && statusBaju.merek === '') {
        return "ini baju size m";
    }
    else if (statusBaju.size <= 6 && statusBaju.merek) {
        return "size baju l";
    }
    else if (statusBaju.size > 6 && statusBaju.merek) {
        return "size baju xl";
    }
    else {
        return "baju tidak ada";
    }
}
var baju1 = {
    size: 1,
    merek: "erigo"
};
var baju2 = {
    size: 5,
    merek: "smith"
};
var baju3 = {
    size: 100,
    merek: "diii"
};
console.log(tentangBaju(baju1));
console.log(tentangBaju(baju2));
console.log(tentangBaju(baju3));
