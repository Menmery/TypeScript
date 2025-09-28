interface Singale {
  sing(): void
  name: string
}

// 类中 必须要实现接口中的所有属性和方法
class Person implements Singale {
  name = '小明'

  sing() {
    console.log('你是我的小呀小苹果')
  }
}
