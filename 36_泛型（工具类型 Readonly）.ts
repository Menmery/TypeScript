interface Props {
  id: string
  children: number[]
}

type ReadonlyProps = Readonly<Props>

let p1: ReadonlyProps = {
  id: '1',
  children: [1, 3]
}

// 报错 属性为只读
// p1.id = '2'
