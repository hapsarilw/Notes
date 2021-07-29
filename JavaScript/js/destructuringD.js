const personOne = {
    name: 'Kyle',
    age: 24,
    favoriteFood: 'Rice',
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

/* Passing personOne / object as parameters */
function printUser({ name, age, favoriteFood = 'Watermelon' }){
    console.log(`Name is: ${name}. Age is ${age}. Food is ${favoriteFood}`)
}
printUser(personOne)