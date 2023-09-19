let MarkMiller = { mass: 78, height: 1.69 }
let JohnSmith = { mass: 92, height: 1.95 }
let calcBMI = (Object) => {
    let BMI = Object.mass / (Object.height * Object.height);
    return BMI;
}

if (calcBMI(MarkMiller) > calcBMI(JohnSmith)) {
    console.log(`Mark's BMI (${calcBMI(MarkMiller)}) is higher than John's (${calcBMI(JohnSmith)})!`)
} else {
    console.log(`John's BMI (${calcBMI(JohnSmith)}) is higher than Mark's (${calcBMI(MarkMiller)})!`)
}