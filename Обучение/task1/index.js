import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputData = [];
let countUglyWord = 0;

rl.on("close", () => {
    console.log(countUglyWord);
    process.exit(0);
});

rl.on("line", function (data) {
    inputData.push(data);

    if (inputData.length == 3) {
        let [n, s, b] = inputData;
        countUglyWord = findWords(n, s, b);

        rl.close();
    }

});

function findWords(n, s, b) {
    let arrWords = s.split(' ');
    let startInd = 0;
    let countWord = 0;

    arrWords.forEach((word) => {
        let endInd = startInd + word.length;
        let schema = b.slice(startInd, endInd);

        let isUgly = checkSchema(schema)

        if (isUgly) countWord++;

        startInd = endInd;
    });

    return countWord;
}

function checkSchema(schema) {
    for (let i = 0; i < schema.length - 1; i++) {
        if (schema[i] == schema[i+1]) return true;
    }
    return false;
}
