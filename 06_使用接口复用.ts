// 接口
interface IPerson {
  name: string
  age: number
  sayHi(): void
}

// 类型别名
type IPerson1 = {
  name: string
  age: number
  sayHi(): void
}

let person: IPerson = {
  name: '刘老师',
  age: 18,
  sayHi() {}
}

let person1: IPerson1 = {
  name: 'jack',
  age: 16,
  sayHi() {}
}