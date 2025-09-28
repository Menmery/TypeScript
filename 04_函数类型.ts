// 1.单独指定参数，返回值类型
const add1 = (num1: number, num2: number) :number => {
    return num1 + num2
}

console.log(add1(2, 3))

// 2.同时指定参数类型和返回值类型
const add2 :(num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2
}

console.log(add2(2, 3))

