let arrHp : string [] = ["lenovo","samsung","xiaomi","ip"] 

function cekHp() {
    const a = arrHp.filter(huruf => huruf.charAt(0) === ('s'))
    arrHp = a
}

console.log(arrHp);
cekHp()
console.log(arrHp);