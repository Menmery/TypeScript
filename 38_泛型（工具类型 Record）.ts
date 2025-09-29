type RecordObj = Record<'a' | 'b' | 'c', string[]>

// 复杂方式
// type RecordObj = {
//   a: string[]
//   b: string[]
//   c: string[]
// }

let obj: RecordObj = {
  a: ['a'],
  b: ['b'],
  c: ['c']
}
