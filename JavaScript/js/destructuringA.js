const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

const a = alphabet[0]
const b = alphabet[1]

/* Get 1st, 2nd, 3rd element */
const [a, b, c] = alphabet

/* Get 1st, 3rd element */
const [a,, c] = alphabet

/* Get 1, 3 and the rest */
const [a,, c, ...rest] = alphabet

/* Combine ywo arrays */
const newArray = [...alphabet, ...numbers]


