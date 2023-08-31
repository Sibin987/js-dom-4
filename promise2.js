let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Settimeout")
    }, 2000);

    resolve(true);

})

promise1.then(() => {
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(()=> {
            //resolve("inside promise2")
            reject( new Error("Error"))
        }, 1000)
    })
    return promise2;
}).then((value) => {
    console.log(value)
}).catch((e) => {
    console.log("error aa gaya bhau")
})