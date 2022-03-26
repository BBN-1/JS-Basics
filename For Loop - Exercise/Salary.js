function solve(input) {


    
    let tabs = Number(input[0])
    let salary = Number(input[1])
    let penalty = 0;
    

    for (let i = 2; i <= tabs+1; i++) {
        let website = input[i];
        if (website === `Facebook`) {
            
            salary -= 150
        } else if (website === `Instagram`) {
           
            salary -= 100
        } else if (website === `Reddit`) {
            
            salary -= 50
        }

         
        
    }
     
     if ( salary <= 0){
         console.log(`You have lost your salary.`)
     } else console.log(salary)
    
   
    
        

}
