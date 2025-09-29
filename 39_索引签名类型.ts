interface AnyObject {
  // key为占位符 可改为其他
  // 只要是string类型的属性名称 都可以出现在对象中
  // 约束该接口中允许出现的属性类型 (number)
  [key: string]: number
}

let obj: AnyObject = {
  a: 1,
  abc: 124,
  abcde: 12345
}

// --

const arr = [1, 3, 5]
arr.forEach

interface MyArray<Type> {
  [index: number]: Type
}
let arr1: MyArray<number> = [1, 3, 5]
arr1[0]
