// 枚举
enum Direction {
  Up, //0
  Down,
  Left,
  Right
}

// enum Direction {
//   Up = 10,
//   Down, //11 默认自增
//   Left,
//   Right
// }

// enum Direction {
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT'
// }

function changeDirection(direction: Direction) {}

changeDirection(Direction.Left)
