interface Props {
  id: string
  children: number[]
}

// 可选属性
type PartialProps = Partial<Props>

// 属性必须全加
let p1: Props = {
  id: '',
  children: [1]
}

// 属性可以只有其中几个 或者一个没有也可以
let p2: PartialProps = {
  id: '',
}
