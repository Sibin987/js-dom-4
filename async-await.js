// async function abcd(){
//     return "Sibin";
// }

// abcd();

async function utility(){

    let maharashtraMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bohot garmi hai")
        }, 8000)
    }) 
    
    let delhiMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bohot thandi hai")
        }, 2000)
    })

    
    let mH = await maharashtraMausam;
    let dh = await delhiMausam;

    return [mH, dh];

}




