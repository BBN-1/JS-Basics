function solve(input) {

    let type = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    
    let priceOfRoses = 5;
    let priceOfDahlias = 3.80;
    let priceOfTulips = 2.80;
    let priceOfNarcissus = 3;
    let priceOfGladiolus = 2.50;
    

    let price = 0.0;
    
    
    
    
    
    
    
    
     switch (type) {
         case `Roses`:
             if ( numberOfFlowers > 80) {
               price = (numberOfFlowers * priceOfRoses) * 0.9
               
             }
             else {

                price = (numberOfFlowers * priceOfRoses)
                
             }
             break;
        case `Dahlias` :
            if ( numberOfFlowers > 90) {
                price = (numberOfFlowers * priceOfDahlias) * 0.85
                
              }
              else {
 
                 price = (numberOfFlowers * priceOfDahlias)
                 
              }
              break;
        case `Tulips` :
            if ( numberOfFlowers > 80) {

                price = (numberOfFlowers * priceOfTulips) * 0.85
                
              }
              else {
 
                 price = (numberOfFlowers * priceOfTulips)
                 
              }
              break;
        case `Narcissus` :
            if ( numberOfFlowers < 120) {
                price = (numberOfFlowers * priceOfNarcissus) + ((numberOfFlowers * priceOfNarcissus) * 0.15)
                
              }
              else {
 
                 price = (numberOfFlowers * priceOfNarcissus)
                 
              }
              break;
         case `Gladiolus` :
            if ( numberOfFlowers < 80) {
                price = (numberOfFlowers * priceOfGladiolus) + ((numberOfFlowers * priceOfGladiolus) * 0.20)
                
              }
              else {
 
                 price = (numberOfFlowers * priceOfGladiolus)
                 
              }
              break;

    }
        
        let sumLeft = Math.abs(budget - price);
        if ( budget >= price ) {
            
           console.log(`Hey, you have a great garden with ${numberOfFlowers} ${type} and ${sumLeft.toFixed(2)} leva left.`)
           
        }
        else{
            
            console.log(`Not enough money, you need ${sumLeft.toFixed(2)} leva more.`)
            
            
            
        }

    
}
 
