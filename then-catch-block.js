let meraPromise = new Promise( function(resolve, reject) {
   
    setTimeout( function(){
        console.log("Inside PRomis Bhaiya")
    }, 2000)
    // resolve(230000)
    reject(new Error('Error aa gaya'))
    
})

meraPromise.then((value) => {
    console.log(value)
}).catch((e) => {
    console.log("Error aa gaya bhai");
})


