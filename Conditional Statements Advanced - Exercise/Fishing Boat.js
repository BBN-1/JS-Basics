function solve(input){


let budget = Number(input[0]);
let season = input[1];
let numberOfFishman = Number(input[2]);



let springRent = 3000;
let summerRent = 4200;
let autumnRent = 4200;
let winterRent = 2600;


let price = 0.0;


switch (season) {
    case `Spring` :
       
         price = springRent 
     break;
     case `Summer`:
     
        price = summerRent 
      break;
      case `Autumn` : 
     
       price = autumnRent 
       break;
     
     case `Winter` :
        
          price = winterRent 
    
          break;

       }


       

       if (numberOfFishman <= 6) {
        price = price * 0.90;
       }
       else if ( numberOfFishman >=7 && numberOfFishman <=11 ) {
        price = price * 0.85;

       }
       else if ( numberOfFishman > 12 ) {
        price = price * 0.75;
       }
  
      if (numberOfFishman % 2 == 0 && season != `Autumn`) {
       price = price * 0.95
       
      }




      let sumLeft = Math.abs(budget - price).toFixed(2)       
      
      if ( budget >= price ) {
       console.log(`Yes! You have ${sumLeft} leva left.`)
        }
      else {

        console.log(`Not enough money! You need ${sumLeft} leva.`)
      }


     



    }
