import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let numbers = [];
let inputNum = 0;
let res = [];

rl.on("close", () => {
    console.log(res.join('\n'));
    process.exit(0);
});

rl.on("line", function (data) {
    inputNum++;

    if (!numbers.includes(data)) {
        numbers.push(data)
    }

    if (inputNum > 1) {
        let maxRes = findNumbers(numbers);
        res.push(maxRes);
    }

    if ((inputNum - 1) == numbers[0]) {
        rl.close();
    }
});

function findNumbers(arr) {
    if (arr.length == 2) return 0;
    let maxRes = 0;

    for (let i = 1; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            let firstNum = arr[i];
            let secondNum = arr[j];
            let currRes = firstNum ^ secondNum;
            if (currRes > maxRes) maxRes = currRes;
        }
    }

    return maxRes;
}
