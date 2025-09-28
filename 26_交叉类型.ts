interface Person {
  name: string
  say(): number
}
interface Contact {
  phone: string
}

type PersonDetail = Person & Contact

let obj: PersonDetail = {
  name: 'jack',
  phone: '133....',
  say() {
    return 1
  }
}
