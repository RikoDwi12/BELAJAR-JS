interface Hp {
    nama : string ,
    ram : number ,   //membuat interface HP 
    toko : string
}

let dataHp : Hp [] = []   //membuat variabel array kosong

class unitHp implements Hp {
    nama : string;
    ram : number;
    toko : string;

    constructor() {
        this.nama,
        this.ram,
        this.toko
    }

    input(nama : string , ram : number, toko : string) : void {
        this.nama = nama,
        this.ram = ram ,
        this.toko = toko

        dataHp.push({
            nama : this.nama,
            ram : this.ram,
            toko : this.toko
        })
    }

    get() : void {
        console.log(dataHp);
        
    }
    

    update (index : number , nama : string ,ram : number, toko : string) : void {
        dataHp[index].nama = nama ,
        dataHp[index].ram = ram ,
        dataHp[index].toko = toko 
        console.log("Datanya ter update");
        
    }

    delete(index : number) {
        dataHp.splice(index,1)
    }
}

const Hp1 = new unitHp()
Hp1.input("Samsung", 4 ,"Semarang")
Hp1.input("Iphone", 6 ,"Solo")
Hp1.input("Asus", 2 ,"Mangkang")
Hp1.input("Xiaomi", 8 ,"Wonosobo") //menambahkan data
Hp1.get()


Hp1.update(1,"infinix", 5 ,"Bali") // mengupdate data array ke 1,
Hp1.get()

Hp1.delete(0)
Hp1.get()

