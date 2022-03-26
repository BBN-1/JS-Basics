function solve(input) {


let budget = Number(input[0]);
let extras = Number(input[1]);
let clothingPerExtra = Number(input[2]);

let decor = budget * 0.10;
let clothing = extras * clothingPerExtra


if ( extras > 150 ) {

    clothing = clothing * 0.90 ;
}

let expendure = decor + clothing
let moneyleft = Math.abs(budget- expendure).toFixed(2)






if ( expendure > budget) {

    console.log(`Not enough money!`);
    console.log(`Wingard needs ${moneyleft} leva more.`);
}

else {

console.log(`Action!`);
console.log(`Wingard starts filming with ${moneyleft} leva left.`);



}
 



}
