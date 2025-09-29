interface IdFunc<Type> {
  id: (value: Type) => Type
  ids: () => Type[]
}

// 要显式指定类型
let obj: IdFunc<number> = {
  id(value) {
    return value
  },
  ids() {
    return [1, 3, 5]
  }
}
