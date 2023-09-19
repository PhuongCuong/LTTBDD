let arrDolphins = [
    96, 108, 89
]

let arrKoalas = [
    88, 91, 110
]

let calcAverage = (arr) => {
    let tb = 0;
    let tong = 0;
    arr.forEach(item => {
        tong += item;
    });
    tb += tong / arr.length;
    return tb;
}

let tbDolphins = calcAverage(arrDolphins);
let tbKoalas = calcAverage(arrKoalas);

console.log('Trung bình của Dolphins', calcAverage(arrDolphins));
console.log('Trung bình của Koalas', calcAverage(arrKoalas));

let checkWinner = (tbDolphins, tbKoalas) => {
    if (tbDolphins >= tbKoalas * 2) {
        console.log(`Dolphins win (${tbDolphins} vs. ${tbKoalas})`)
    } else if (tbDolphins * 2 <= tbKoalas) {
        console.log(`Koalas win (${tbKoalas} vs. ${tbDolphins})`)

    } else {
        console.log('not winner')
    }
}

checkWinner();