import readline from 'readline';
//const readline = require( 'readline' );

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputData = [];
let res = 0;

rl.on("close", () => {
    console.log(res);
    process.exit(0);
});

rl.on("line", function (data) {
    inputData.push(data);

    if (inputData.length === 3) {
        getNumInterestingDays();
        rl.close();
    } 
});

function getNumInterestingDays() {
    let arrActivities = inputData[1].split(' ');
    let minActivities = +inputData[2];

    for (let l = 0; l <= arrActivities.length - minActivities; l++) {
        for (let r = l + minActivities - 1; r < arrActivities.length; r++) {
            let days = arrActivities.slice(l, r + 1);
            let count = [...new Set(days)].length;

            if (count >= minActivities) res++;
        }
    }
}

