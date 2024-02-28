function cekTanaman(ttanaman) {
    if (ttanaman === "buah") {
        return 8;
    }
    else if (ttanaman === "sayur") {
        return 5;
    }
    else if (ttanaman === "rumput") {
        return 3;
    }
    else {
        return 0;
    }
}
function cekUsiaTanaman(utanaman) {
    if (utanaman >= 0 && utanaman <= 5) {
        return 3;
    }
    else if (utanaman > 5 && utanaman <= 12) {
        return 5;
    }
    else if (utanaman >= 12 && utanaman <= 24) {
        return 8;
    }
    else if (utanaman > 24) {
        return 10;
    }
    else {
        return 0;
    }
}
function cekBiji(jbiji) {
    if (jbiji === "dikotil") {
        return 3;
    }
    else if (jbiji === "monokotil") {
        return 5;
    }
    else {
        return 0;
    }
}
function cekAkar(jakar) {
    if (jakar === "serabut") {
        return 5;
    }
    else if (jakar === "tunggang") {
        return 8;
    }
    else {
        return 0;
    }
}
function cekTanah(jenis) {
    if (jenis === "tanah merah") {
        return 3;
    }
    else if (jenis === "tanah humus") {
        return 5;
    }
    else if (jenis === "tanah sekam") {
        return 8;
    }
    else {
        return 0;
    }
}
function cekUnsurHara(uhara) {
    if (uhara >= 0 && uhara <= 30) {
        return 3;
    }
    else if (uhara > 30 && uhara <= 60) {
        return 5;
    }
    else if (uhara > 60) {
        return 8;
    }
    else {
        return 0;
    }
}
var tanaman1 = {
    ttanaman: "rumput",
    utanaman: 3,
    jbiji: "dikotil",
    jakar: "serabut",
};
var tanaman2 = {
    ttanaman: "buah",
    utanaman: 5,
    jbiji: "monokotil",
    jakar: "tunggang",
};
var mediatanam1 = {
    jenis: "tanah merah",
    uhara: 20,
};
var mediatanam2 = {
    jenis: "tanah humus",
    uhara: 35,
};
//////////////
function jumlahTanaman(tanaman) {
    var total = cekTanaman(tanaman.ttanaman) + cekUsiaTanaman(tanaman.utanaman) + cekBiji(tanaman.jbiji) + cekAkar(tanaman.jakar);
    return total;
}
console.log("JUMLAH ", jumlahTanaman(tanaman1));
function jumlahMediatanam(media) {
    var totalnya = cekTanah(media.jenis) + cekUnsurHara(media.uhara);
    return totalnya;
}
var intensitasCahaya1 = 30;
var intensitasCahaya2 = 50;
var intensitasCahaya3 = 71;
function hasil(tanaman, media, intensitasCahaya) {
    var hasilTanaman = jumlahTanaman(tanaman);
    var hasilMedia = jumlahMediatanam(media);
    if ((hasilTanaman >= 0 && hasilTanaman <= 5) && (hasilMedia >= 0 && hasilMedia <= 5) && (intensitasCahaya >= 0 && intensitasCahaya <= 35)) {
        return 'kondisi tanaman 1';
    }
    else if ((hasilTanaman > 5 && hasilTanaman <= 10) && (hasilMedia >= 0 && hasilMedia <= 5) && (intensitasCahaya >= 0 && intensitasCahaya <= 35)) {
        return 'kondisi tanaman 2';
    }
    else if ((hasilTanaman >= 0 && hasilTanaman <= 5) && (hasilMedia > 5 && hasilMedia <= 10) && (intensitasCahaya >= 0 && intensitasCahaya <= 35)) {
        return 'kondisi 3';
    }
    else if ((hasilTanaman > 5 && hasilTanaman <= 10) && (hasilMedia > 5 && hasilMedia <= 10) && (intensitasCahaya >= 0 && intensitasCahaya <= 35)) {
        return 'kondisi 4';
    }
    else if ((hasilTanaman >= 0 && hasilTanaman <= 5) && (hasilMedia >= 0 && hasilMedia <= 5) && (intensitasCahaya > 35 && intensitasCahaya <= 70)) {
        return 'kondisi 5';
    }
    else if ((hasilTanaman > 5 && hasilTanaman <= 10) && (hasilMedia >= 0 && hasilMedia <= 5) && (intensitasCahaya > 35 && intensitasCahaya <= 70)) {
        return 'kondisi 6';
    }
    else if ((hasilTanaman >= 0 && hasilTanaman <= 5) && (hasilMedia > 5 && hasilMedia <= 10) && (intensitasCahaya > 35 && intensitasCahaya <= 70)) {
        return 'kondisi 7';
    }
    else if ((hasilTanaman > 5 && hasilTanaman <= 10) && (hasilMedia > 5 && hasilMedia <= 10) && (intensitasCahaya > 35 && intensitasCahaya <= 70)) {
        return 'kondisi 8';
    }
    else if ((hasilTanaman >= 0 && hasilTanaman <= 5) && (hasilMedia >= 0 && hasilMedia <= 5) && (intensitasCahaya > 70)) {
        return 'kondisi 9';
    }
    else if ((hasilTanaman > 5 && hasilTanaman <= 10) && (hasilMedia >= 0 && hasilMedia <= 5) && (intensitasCahaya > 70)) {
        return 'kondisi 10';
    }
    else if ((hasilTanaman >= 0 && hasilTanaman <= 5) && (hasilMedia > 5 && hasilMedia <= 10) && (intensitasCahaya > 70)) {
        return 'kondisi 11';
    }
    else if ((hasilTanaman > 5 && hasilTanaman <= 10) && (hasilMedia > 5 && hasilMedia <= 10) && (intensitasCahaya > 70)) {
        return 'kondisi 12';
    }
    return 'tidak ada kondisi';
}
// console.log(hasil(tanaman1,mediatanam2,));
console.log(hasil(tanaman1, mediatanam1, intensitasCahaya1));
//console.log(hasil(tanaman1,mediatanam1));
