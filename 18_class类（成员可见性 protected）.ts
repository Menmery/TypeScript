// 父类
class Animal {
  // 这个方法是受保护的
  // 仅对其声明所在类和子类中可见 实例对象都不可见
  protected move() {
    console.log('走两步')
  }

  run() {
    this.move()
    console.log('跑起来')
  }
}

const a = new Animal()
// a.move() // 报错，move() 方法是受保护的

// 子类
class Dog extends Animal {
  bark() {
    this.move()
    console.log('旺旺！')
  }
}
const d = new Dog()
d.bark()
// d.move() // 报错，move() 方法是受保护的