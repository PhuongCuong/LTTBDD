let bill = 100;
let calcTip = (bill) => {
    let tip = bill >= 50 && bill <= 300 ? 15 / 100 * bill : 20 / 100 * bill;
    return tip;
}

let arrBill = [125, 555, 44]
let arrtip = [];
let arrtotal = [];
arrBill.forEach(item => {
    arrtip.push(calcTip(item));
    arrtotal.push(calcTip(item) + item)
})
console.log(arrtip)
console.log(arrtotal)