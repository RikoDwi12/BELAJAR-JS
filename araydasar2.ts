let arrNegara:string[] = ['indonesia','malaysia','jepang','brazil','maroko','australia','arab','brundi'];

let dijumlahkan = 0
let negara = ""

function hurufM () {
    for (let a = 0; a < arrNegara.length; a++) {
        if (arrNegara[a].includes('m')) {
           negara = negara + ', ' +arrNegara[a]
        }
    }
}

hurufM()
console.log(`negara yang mengandung huruf m adalah ${negara}`);

// penjumlahan()
console.log(`jumlah negaranya adalah ${arrNegara.length}`);
const hurufb = () => {
    for (let a = 0; a < arrNegara.length; a++) {
        if (arrNegara[a].includes('a')) {
            
             dijumlahkan = dijumlahkan  + 1
        }
        
    }
    
}
function hurufA () {
    for (let a = 0; a < arrNegara.length; a++) {
        if (arrNegara[a].includes('a')) {
             dijumlahkan = dijumlahkan  + 1
        }
        
    }
}
hurufA()
console.log(`jumlah negara yang menggandung huruf A= ${dijumlahkan}`);