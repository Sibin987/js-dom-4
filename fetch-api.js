
// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let output = await content.json();
//     console.log(output)
// }


// POST CALL
async function post(){

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",

        // contents to send
        body: JSON.stringify({
            body: "hello",
            userId: 2,
        }),

        // additional information headers mein karenge
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }

    })

    return await res.json();

}
