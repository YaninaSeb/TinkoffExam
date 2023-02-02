import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputData = [];
let value = []; //ценность валюты
let allVariants = [];

rl.on("close", () => {
    console.log(allVariants.length);
    process.exit(0);
});

rl.on("line", function (data) {
    inputData.push(data);

    if (inputData.length == 2) {
        value = inputData[0].split(' ');
        change(inputData[1].split(' '));

        rl.close();
    }
    
});

function change(currAmount) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(i == j) continue;

            if (+currAmount[i] >= +value[i]) {
                let newAmount = [...currAmount];
                newAmount[i] = +newAmount[i] - +value[i];
                newAmount[j] = +newAmount[j] + +value[j];
    
                if (!isIncludes(allVariants,newAmount)) {
                    allVariants.push(newAmount);
                    change(newAmount);
                }
            } 
        }
    }
}

function isIncludes(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].join(' ') == arr2.join(' ')) return true
    }
    return false
}
