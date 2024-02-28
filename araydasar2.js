var arrNegara = ['indonesia', 'malaysia', 'jepang', 'brazil', 'maroko', 'australia', 'arab', 'brundi'];
var dijumlahkan = 0;
var negara = "";
function hurufM() {
    for (var a = 0; a < arrNegara.length; a++) {
        if (arrNegara[a].includes('m')) {
            negara = negara + ', ' + arrNegara[a];
        }
    }
}
hurufM();
console.log("negara yang mengandung huruf m adalah ".concat(negara));
// penjumlahan()
console.log("jumlah negaranya adalah ".concat(arrNegara.length));
var hurufb = function () {
    for (var a = 0; a < arrNegara.length; a++) {
        if (arrNegara[a].includes('a')) {
            dijumlahkan = dijumlahkan + 1;
        }
    }
};
function hurufA() {
    for (var a = 0; a < arrNegara.length; a++) {
        if (arrNegara[a].includes('a')) {
            dijumlahkan = dijumlahkan + 1;
        }
    }
}
hurufA();
console.log("jumlah negara yang menggandung huruf A= ".concat(dijumlahkan));
