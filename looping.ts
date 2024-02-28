function statusLooping() {
    for (var num = 0; num <= 5; num++) {
        console.log(`${num}`);   
    }   
}
statusLooping()
console.log("\n")

///////////////////////////////////
function loppingKurang() {

    
    for (let z = 5;  z >= 0; z--) {
        if (z % 2 === 0) console.log(z);
    }
    
}
loppingKurang()
console.log("\n")
///////////////////////////////////

// Contoh penggunaan for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("\n")
/////////////////////////////////
let counter: number = 0;
do {
  console.log(counter);
  counter++;
} while (counter < 5);
