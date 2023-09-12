//1.
let arrBMI = [
        { mass: 78, height: 1.69 },
        { mass: 92, height: 1.95 }
    ]
    // let MarkM = 40,
    //     MarkH = 1.6;
let BMI;
let arr = [];
//2.
let markHigherBMI = false
arrBMI.map((item, index) => {
        BMI = item.mass / (item.height * item.height)
        arr.push(BMI)
        return (
            console.log(`chỉ số BMI:${index === 0 ? 'Mark' : 'John'}`, BMI)

        )
    })
    //3.
if (arr[0] < arr[1]) {
    markHigherBMI = true
} else {
    markHigherBMI = false
}
console.log(markHigherBMI)