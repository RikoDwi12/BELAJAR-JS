let bilanganAcak : number [] = [1,3,4,5,6,7,8,9,12,13,88]

function cekbilangan() {
    // let arr : number [] = []

    const a = bilanganAcak.filter(angka => angka < 50)
    bilanganAcak = a


    // for (var i = 0; i < bilanganAcak.length; i++) {
    //     if (bilanganAcak[i] % 2 !== 0) {
    //         arr.push(bilanganAcak[i])
    //         // console.log(bilanganAcak[i]);
            
    //     }
    // }
    // bilanganAcak = arr
}

 console.log(bilanganAcak);
cekbilangan()
console.log(bilanganAcak);

