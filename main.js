"use strict";

const getText4 = async() => {
    try{
        const response = await fetch('./test.txt');
        return await response.text();
    } catch (error){
        console.log(error);
        return null;
    }
}

const getAsyncText = async() => {
    const result = await getText4();
    if(result !== null){
        const book = new Book("shiroganeki", result);
        console.log(book);
    }
    console.log("From getAsyncText(): ");
    console.log(result); // succeeded
}

getAsyncText();