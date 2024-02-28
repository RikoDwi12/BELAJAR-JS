interface Segitiga{
    alas : number ,
    tinggi : number
}
function luasSegitiga(statusluas:Segitiga) {

     let total = 0.5 * statusluas.alas * statusluas.tinggi  
        if (total >= 0 && total <= 10) {
            return "kecil"
        }
        else if (total > 10 && total <=20) {
            return "besar"  
        }
        else {
            return "tidak terdefinisi"
        }
     } 
     
const segitiga1 ={
    alas : 3,
    tinggi : 4 ,
}
const segitiga2 ={
    alas : 4,
    tinggi: 8,
}
const segitiga3 ={
    alas : 6,
    tinggi :8 ,
}

console.log(luasSegitiga(segitiga1));
console.log(luasSegitiga(segitiga2));
console.log(luasSegitiga(segitiga3));





