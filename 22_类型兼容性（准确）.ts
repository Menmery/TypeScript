// 两个类的兼容性演示：

class Point {
  x: number = 1
  y: number = 2
}
class Point2D {
  x: number = 1
  y: number = 2
}

const p: Point = new Point2D()

class Point3D {
  x: number = 4
  y: number = 5
  z: number = 6
}

const p1: Point = new Point3D() //多的可以赋值给少的

console.log(p1.x, p1.y) //4,5


// 错误演示
// const p2: Point3D = new Point()
