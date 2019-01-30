//Normal function which is can't return multiple things same time




// function sayHi(){

//      return 'hi'
        //   return 'world' // was never excuted
// }

// const result= sayHi()
// console.log(result)


//OUTPUT ---> HI


// Special function generator for redux saga



// function  * sayHiGenerator(){

//      yield 'HEY'

//      return 'hi'
// }

// const resultGenarators= sayHiGenerator()
// console.log(resultGenarators);// output --> Object iterator
// console.log(resultGenarators.next()); // output --> { value: 'HEY', done: false } it's return value but done false  because here it's neve finished exicute
// console.log(resultGenarators.next());// output --> { value: 'hi', done: true } because here it's exicute finished
// console.log(resultGenarators.next()); // output --> { value: 'hi', done: true } 
//it's work under hood  like looping


// Another way genrators calling 

function* newGenrators() {
     yield 'something'
     const final = yield 'give me value'
     return 'final value'
} 

const newGenrator = newGenrators()
console.log(newGenrator);// output --> Object iterator
console.log(newGenrator.next()); // output --> { value: 'something', done: false } it's return value but done false  because here it's neve finished exicute
console.log(newGenrator.next());// output --> { value: 'give me value', done: false } because here it's exicute finished
console.log(newGenrator.next()); // output --> { value: 'final value', done: true } 
//it's work under hood  like looping




