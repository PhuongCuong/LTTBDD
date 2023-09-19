//1.
let bill = 275
let tip = bill >= 50 && bill <= 300 ? 15 / 100 : 20 / 100;
//2.
console.log(`The bill was ${bill}, the tip was ${tip*bill}, and the total value
${bill+tip*bill}”`)