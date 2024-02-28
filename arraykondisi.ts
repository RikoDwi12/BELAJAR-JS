let nomerAcak : number [] = [1,3,2,5,6] 

function cekAcak() {
    for (let i = 0; i < nomerAcak.length; i++) {
        if (nomerAcak[i] % 2 === 0) {
            nomerAcak[i] = 100
        }
    }
}

console.log(nomerAcak);
cekAcak()
console.log(nomerAcak);

let angkaAcak : number [] = [1,3,2,4,6,8,9]


