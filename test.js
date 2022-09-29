const debounce = requeire('lodash')


const greeting = (name, location) => {
  console.log(`My name is ${name} and I am in ${location}`)
}

debounce(greeting('Amit', 'the UK'), 3000)