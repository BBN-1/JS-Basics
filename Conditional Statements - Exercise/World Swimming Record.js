function solve(input) {



let worldRecord = Number(input[0]);
let lenghtInMeters = Number(input[1]);
let metersPerSecond = Number(input[2]);


let addedSeconds = Math.floor(lenghtInMeters / 15) * 12.5;
let swimmingtime = ((lenghtInMeters * metersPerSecond) + addedSeconds);


if ( swimmingtime >= worldRecord) {

let neededSeconds = swimmingtime - worldRecord;
console.log(`No, he failed! He was ${neededSeconds.toFixed(2)} seconds slower.`);

} else {

    console.log(`Yes, he succeeded! The new world record is ${swimmingtime.toFixed(2)} seconds.`);
}


}
