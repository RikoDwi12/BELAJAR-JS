var arrHp = ["lenovo", "samsung", "xiaomi", "ip"];
function cekHp() {
    var a = arrHp.filter(function (huruf) { return huruf.charAt(0) === ('s'); });
    arrHp = a;
}
console.log(arrHp);
cekHp();
console.log(arrHp);
