class Person {
  age: number
  gender: string

  // 无返回值
  constructor(age: number, gender: string) {
    this.age = age
    this.gender = gender
  }
}

const p = new Person(18, '男')
console.log(p.age, p.gender)
