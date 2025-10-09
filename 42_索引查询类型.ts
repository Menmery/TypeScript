type Props = { a: number; b: string; c: boolean }

// 查询 Props 类中 a 的类型
type TypeA = Props['a']

// 模拟 Partial 类型：
type MyPartial<T> = {
  // p代表T中任意一个属性
  // ?代表可选
  [P in keyof T]?: T[P]
}

type PartialProps = MyPartial<Props>

// 使其属性可选
const obj: PartialProps = {
  a: 1,
  b: '2'
}