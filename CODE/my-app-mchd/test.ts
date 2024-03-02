interface Test {
  name: string
  age: number
}

function testFunction(t: Test) {
  console.log(t)
}

testFunction({ name: 'test', age: 20 })
