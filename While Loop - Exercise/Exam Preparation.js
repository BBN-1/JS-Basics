function solve(input) {


    let limit = Number(input[0]);
    let i = 1;
    let tasks = 0;
    let sumScore = 0;

    let command = input[i]
    let badGrades = 0;



    while (command !== `Enough`) {

        let task = input[i++];
        let score = Number(input[i]);

        tasks++;
        sumScore += score
        i++;
        command = input[i];

        if (score <= 4) {
            badGrades++;
        }



        if (badGrades === limit) {
            console.log(`You need a break, ${badGrades} poor grades.`)
            break;
        }

        if (command === `Enough`) {
            console.log(`Average score: ${(sumScore / tasks).toFixed(2)}`)
            console.log(`Number of problems: ${tasks}`)
            console.log(`Last problem: ${task}`)

        }




    }



}
