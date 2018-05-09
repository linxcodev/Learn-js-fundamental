// create object
const person = {
    name: 'Fajrul',
    age: '19',
    address: 'kendal',
    sayHello: () => console.log('hallo')
}

// add value on person in vaiable status
person.status = 'single'

// delete element in object
delete person.age

// call object
// console.log(person);

// call function in object
person.sayHello()