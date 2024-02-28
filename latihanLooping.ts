let arrAcak:number[] = [4, 2, 7, 3,7,8,3,6]

// const bilanganGenap = arrAcak.filter((angka) => angka % 2 ===0);
// console.log("bilangan genap", bilanganGenap);

function bilanganG (bilangku : number[]) {
    var x = ''
    for (var i = 0; i < arrAcak.length; i++) { //ini proses loopingnya
        if (arrAcak[i] % 2 === 0) {               //memasukann kondisi bilangannn yg bisa dibagi menjadi 2
            var x =  x + ''+arrAcak[i]                // menampilkan bilangan secara horizontal
        }
    }
    return x
}

function bilanganGanjil () {
    for (var i = 0; i < arrAcak.length; i++) {
        if (arrAcak[i] % 2 !== 0) {
            console.log(arrAcak[i]);          // bentuk hasilnya adalah vertikal seperti array
        }
    }
}

//  console.log(arrAcak);
//  bilanganG(arrAcak)
 console.log(bilanganG(arrAcak)); //ini digunakan jika didalam fanction ada returny 
 bilanganGanjil() //digunakan apabila didalam fanction tidak ada retrunnya

 
// console.log(arrAcak);



// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Mencari bilangan genap
// const bilanganGenap = array.filter((angka) => angka % 2 === 0);
// console.log("Bilangan Genap:", bilanganGenap);

// // Mencari bilangan ganjil
// const bilanganGanjil = array.filter((angka) => angka % 2 !== 0);
// console.log("Bilangan Ganjil:", bilanganGanjil);

// function looP () {
//     for(let i=0; i < arrAcak.length; i++) {
        
//     }
// }

 // looP() cara menampilkan looping 