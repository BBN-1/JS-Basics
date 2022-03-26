function solve(input) {


let Athlete1 = Number(input[0]);
let Athlete2 = Number(input[1]);
let Athlete3 = Number(input[2]);


let totalSeconds = Athlete1 + Athlete2 + Athlete3;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;


if ( seconds >= 10 ) {

    console.log(`${minutes}:${seconds}`);

} else {


    console.log(`${minutes}:0${seconds}`);

}
 
}
