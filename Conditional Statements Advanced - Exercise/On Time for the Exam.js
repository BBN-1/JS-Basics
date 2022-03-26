function solve(input){


let examHour = Number(input[0]);
let examMinutes = Number(input[1]);
let arrivalHour = Number(input[2]);
let arrivalMinutes = Number(input[3]);


let examTotalMinutes = examHour * 60 + examMinutes;
let arrivalTotalMinutes = arrivalHour * 60 + arrivalMinutes;

let difference = Math.abs(arrivalTotalMinutes - examTotalMinutes);
let hourDifference = Math.floor(difference / 60);
let minuteDifference = difference % 60;


if ( minuteDifference === 0 || minuteDifference < 10 && hourDifference > 0) {

    minuteDifference = `0${minuteDifference}`;
}


if ( arrivalTotalMinutes === examTotalMinutes) {

    console.log(`On time`);

}

  else if ( arrivalTotalMinutes < examTotalMinutes && difference <= 30 ) {

    console.log(`On time`);
    console.log(`${minuteDifference} minutes before the start`);

  } 

  else if ( arrivalTotalMinutes < examTotalMinutes && (difference > 30 && difference < 60 )) {

    console.log(`Early`);
    console.log(`${minuteDifference} minutes before the start`);

  }

  else if ( arrivalTotalMinutes < examTotalMinutes && difference >= 60 ) {

   console.log(`Early`);
   console.log(`${hourDifference}:${minuteDifference} hours before the start`);

  }

  else if (arrivalTotalMinutes > examTotalMinutes && difference < 60) {

    console.log(`Late`);
    console.log(`${minuteDifference} minutes after the start`);

  }

  else if (arrivalTotalMinutes > examTotalMinutes && difference >= 60 ) {

    console.log(`Late`);
    console.log(`${hourDifference}:${minuteDifference} hours after the start`);

  }

  


}
