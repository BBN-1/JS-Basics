function trainTheTrainers(arr) {
    let peopleCount = Number(arr[0]);
    arr.shift();

    let presentationName = '';
    let score = 0;
    let allScores = 0;
    let numberOfAllPeople = 0;

    let i = 0;
    while(arr[i] !== 'Finish') {
        presentationName += arr[i];

        let end = i + peopleCount;
        while(i < end) {
            i++;
            score += Number(arr[i]);
            allScores += Number(arr[i]);
            numberOfAllPeople += 1;
        }

        let avgScore = score / peopleCount;
        console.log(`${presentationName} - ${avgScore.toFixed(2)}.`);

        presentationName = '';
        score = 0;
        i++;
    }

    let allAVGScore = allScores / numberOfAllPeople;
    console.log(`Student\'s final assessment is ${allAVGScore.toFixed(2)}.`)
}
