// Promise consist of two states resolve and reject
// consists of two parameters
// if succesfull resolve and if fails reject
let meraPromise = new Promise( function(resolve, reject) {
   
    setTimeout( function(){
        console.log("Inside PRomis Bhaiya")
    }, 2000)

     resolve(230000)
    // reject(new Error('Error aa gaya'))
    
})

let meraPromise2 = new Promise( function(resolve, reject) {
   
    setTimeout( function(){
        console.log("Inside PRomis2 Bhaiya")
    }, 3000)

    resolve(230000)
    // reject(new Error('Error aa gaya'))
    
})

console.log("Pehla");

// help us to determine state of promise
console.log(meraPromise);



