function solve(input) {


let projectionType = input[0];
let rowNumber = Number(input[1]);
let columns = Number(input[2]);

let numberOfSeats = rowNumber * columns

switch (projectionType) {

    case `Premiere`:
        income = numberOfSeats * 12.00
        break;
    case `Normal` :
        income = numberOfSeats * 7.50 
        break;
    case `Discount` :
        income = numberOfSeats * 5
        break; 
        default:
            console.log(`error`)

    }

    console.log(`${income.toFixed(2)} leva`)


}
