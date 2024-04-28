/* 
a little hole of function in javascript
*/

//return -> console.log()

/*function addName (fullname) {
    return fullname
}

alert(addName('Andre'))*/




/*function addName (fristName, lastName) {
    console.log (fristName, lastName)
    console.log ('nama depan:', fristName)
    console.log ('nama belakang:', lastName)
}

addName('Andre', 'Ganteng')*/





/*function addName () {
    console.log ('nama depann:', arguments [0])
    console.log ('nama belakang:', arguments [1])
}

addName('Andre', 'Ganteng')*/








/*const fullname = function addName (fristName, lastName) {
    console.log (fristName, lastName)
    
}
fullname('Andre', 'Ganteng')*/







/*function addName (firstName, lastName) {
    console.log (firstName, lastName)
    
}
const fullname = new Function (
    'firstname',
    'lastname',
    'console.log(firstname, lastname)',
)


fullname ('ahmad','andre')*/






function addName (firstName, lastName) {
    console.log (firstName, lastName)
    
}

//cara 1 keyword new function
const sum1 = new Function ( 'x', 'y','console.log (x+y)')

//cara 2 standar function
function sum2(x, y) {
    console.log (x + y)
}

//cara 3 arrow function
const sum3 = (x, y) => {
    console.log (x + y)
}
sum1 (1, 1)
sum2 (2, 2)
sum3 (3, 3)

