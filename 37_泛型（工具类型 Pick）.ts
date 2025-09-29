interface Props {
  id: string
  title: string
  children: number[]
}

// 构造出的PickProps类型，只包含id和title两个属性
type PickProps = Pick<Props, 'id' | 'title'>
