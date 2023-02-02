import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputData = [];
let res = '';

rl.on("close", () => {
    console.log(res);
    process.exit(0);
});

rl.on("line", function (data) {
    inputData.push(data);

    if (inputData.length == 2 && inputData[1].length == inputData[0]) {
        let str = inputData[1];
        res = checkStr(str);
        rl.close();
    } 
});

function checkStr(str) {
    if (str.length % 2 != 0) return 'NO';

    let lenPart = str.length / 2;
    for (let i = 0; i < lenPart; i++) {
        if (str[i] !== str[i + lenPart]) {
            let isEqual = checkSides(str.split(''), i, i + lenPart);
            return isEqual ? 'YES' : 'NO';
        }
    }

    return 'YES';
}

function checkSides(arr, firstInd, secondInd) {
    for (let i = firstInd + 1; i < arr.length; i++) {
        let elem = arr[i];
        if (elem === arr[secondInd] && i !== secondInd) {
            let temporary = arr[firstInd]
            arr[firstInd] = arr[i];
            arr[i] = temporary;

            let leftPart = arr.slice(0, arr.length / 2).join('');
            let rightPart = arr.slice(arr.length / 2).join('');

            if (leftPart == rightPart) return true
        }
    }

    return false;
}
