function solve(input){


let book = input[0];
let i = 1;
let nextbook = input[i];
let counter = 0;


while (nextbook !== book){
    if ( nextbook === `No More Books`){
        console.log(`The book you search is not here!`)
        console.log(`You checked ${counter} books.`)
        break;
    }

    counter++;
    i++;
    nextbook = input[i]
}

if ( nextbook === book){
    console.log(`You checked ${counter} books and found it.`)
}



}
