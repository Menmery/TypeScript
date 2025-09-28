console.log(typeof 'Hello TS') // string

let p = { x: 1, y: 2 }

// function formatPoint(point: { x: number; y: number }) {}
function formatPoint(point: typeof p) {}