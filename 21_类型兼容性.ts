// 演示类型兼容性：

// let arr = ['a', 'b', 'c']

// arr.forEach(item => {})
// arr.forEach((item, index) => {})
// arr.forEach((item, index, array) => {})

// 两个类的兼容性演示：
class Point {
  x: number = 12
  y: number = 13
}
class Point2D {
  x: number = 14
  y: number = 15
}

const p: Point = new Point2D()
