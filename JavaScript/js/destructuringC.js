const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    age: 32,
    favoriteFood: 'Watermelon'    
}

// Variable's name based on key object
//const { name: firstName, address: { city } } = personTwo

// Variable's name based custom name
const { name: userName = ' john', age: userAge } = personTwo

//console.log(userName) // Sally
//console.log(city) // Somewhere

const personThree = {...personOne, ...personTwo}

console.log(personThree);
