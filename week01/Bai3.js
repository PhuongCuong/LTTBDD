//1.
let arrDolphins = [
    97, 112, 101
]

let arrKoalas = [
    109, 95, 106
]
let arrTB = [];
let tb1 = 0;
let tb2 = 0;



arrDolphins.forEach((item, index) => {
    let tong = 0;
    tong += item;
    tb1 += tong / arrDolphins.length
})

arrKoalas.forEach((item, index) => {
        let tong = 0;
        tong += item;
        tb2 += tong / arrKoalas.length
    })
    //2.
if (tb1 < tb2) {
    console.log('đội arrKoalas chiến thắng')
} else if (tb1 > tb2) {
    console.log('đội arrDolphins chiến thắng')
} else {
    console.log('hai đội hòa nhau')
}
//3.
if (tb1 >= 100 && tb2 >= 100) {
    if (tb1 < tb2) {
        console.log('đội arrKoalas chiến thắng')
    } else if (tb1 > tb2) {
        console.log('đội arrDolphins chiến thắng')
    } else {
        console.log('hai đội hòa nhau')
    }
} else if (tb1 >= 100 && tb2 <= 100) {
    console.log('đội arrDolphins chiến thắng')
} else if (tb1 <= 100 && tb2 >= 100) {
    console.log('đội arrKoalas chiến thắng')
} else {
    console.log('không có đội nào dành cúp')
}