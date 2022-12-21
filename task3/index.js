import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let numbers = [];

rl.on("close", () => {
    console.log(numbers[0], numbers[1]);
    process.exit(0);
});

rl.on("line", function (data) {
    numbers = findNumbers(data);
    rl.close();
});

function findNumbers(n) {
    let startNum = parseInt(n / 2);
    for (let i = startNum; i > 0; i--) {
        if ((n-i) % i == 0) return [i, n-i];
    }
}
