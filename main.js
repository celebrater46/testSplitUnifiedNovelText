"use strict";

// const getText = async(path) => {
//     const response = await fetch(path, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/text'
//         }
//     });
//     return response.text();
// }
//
// console.log(getText("./test.txt")); // Promise

// const getText2 = async(path = '', data = {}) => {
//     const response = await fetch(path, {
//         method: 'GET',
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/text'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }
//
// console.log(getText2("./test.json")); // Uncaught (in promise) TypeError: Failed to execute 'fetch' on 'Window': Request with GET/HEAD method cannot have body.

// const response = await fetch('/api/names', {
//     method: 'GET'
// });

const getJson = async() => {
    const response = await fetch('./test.json');
    // const names = await response.json();
    return await response.json();
    // console.log(names);
    // return names;
}

const getAsyncJson = async() => {
    const result = await getJson();
    console.log("From getAsyncJson(): ");
    console.log(result); // succeeded
    // return await getJson();
}

const getText3 = async() => {
    const response = await fetch('./test.txt');
    return await response.text();
}

const getText4 = async() => {
    try{
        const response = await fetch('./test.txt');
        // const response = await fetch('./none.txt'); //
        console.log(response.status); // 200
        console.log(response.statusText); // OK
        return await response.text();
    } catch (error){
        console.log(error);
        return null;
    }
}

const getAsyncText = async() => {
    // const result = await getText3(); // If the file is nothing, it will stop
    const result = await getText4();
    console.log("From getAsyncText(): ");
    console.log(result); // succeeded
}

// getJson();
// console.log("loadNames returned: ");
// console.log(getJson()); // Promise
// console.log(await getJson()); // Uncaught SyntaxError: missing ) after argument list
// console.log(getAsyncJson()); // Promise
// getAsyncJson();
getAsyncText();