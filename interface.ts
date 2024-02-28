interface Hewan {
 jenis : string ,
 jumlahKaki : number ,
 warnaKulit : string ,

}

const hewan1 : Hewan = {
    jenis : "gajah" ,
    jumlahKaki : 4 ,
    warnaKulit : "hitam"
}

const hewan2 : Hewan = {
    jenis : "jerapah" ,
    jumlahKaki : 4 ,
    warnaKulit : "kuning"
}

const hewan3 : Hewan = {
    jenis : "semut" ,
    jumlahKaki : 8 ,
    warnaKulit : "merah"
}

interface Habitat {
    suhuUdara : number ,
    jenisHabitat : string 
}

const habitat1 ={
    suhuUdara : 10 ,
    jenisHabitat : "savana" ,
}

function cekSuhuudara(suhu:number) {
    if (suhu >= 0 && suhu <=12) {
        return 3
    }
    else if (suhu > 12 && suhu <= 25) {
        return 5
    }
    else if (suhu > 25) {
        return 8
    }
    else {
        return 0
    }
}

function cekJenisHabitat(jenishabitat:string) {
    if(jenishabitat === "savana") {
        return 3
    }
    else if (jenishabitat === "tundra") {
        return 5
    }
    else if (jenishabitat === "rawa") {
        return 8
    }
    else {
        return 0
    }
}

function cekJumlah(habitat:Habitat) {
    var jumlah = cekSuhuudara (habitat.suhuUdara) + cekJenisHabitat (habitat.jenisHabitat)

    if (jumlah >= 0 && jumlah <= 5) {
        return "buruk"
    }
    else if (jumlah > 5 && jumlah <= 10) {
        return "baik"
    }
    else {
        return "tidak terdefinisi"
    }
}


function createHewan (hewan : Hewan) {
     return `jenis hewannya adalah : ${hewan.jenis} jumlah kakinnya adalah : ${hewan.jumlahKaki} warnakulitnya adalah : ${hewan.warnaKulit} `
    
    
    
}

// console.log(createHewan(hewan1));
 console.log(createHewan(hewan1) + ' habitatnnya ' + cekJumlah(habitat1))
// console.log(createHewan(hewan3));


