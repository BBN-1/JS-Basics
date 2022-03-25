function solve(input) {

    let target = Number(input[0]);
    let startMoney = Number(input[1]);

    let i = 2;
    let days = 0;
    let spendDays = 0;

    while (true) {

        let operation = input[i++];
        let money = Number(input[i])

        if (operation === `spend`) {
            spendDays++;
            days++
            if (money > startMoney) {
                startMoney = 0;
            } else {
                startMoney -= money;
            }
            
        }else if (operation === `save`) {
            days++
            spendDays = 0;
            startMoney += money

        }

        if (spendDays === 5) {
            console.log(`You can't save the money.`)
            console.log(days)
            break;
        }

        if (startMoney >= target) {
            console.log(`You saved the money for ${days} days.`)
            break;
        }

    }


}
