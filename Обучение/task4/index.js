import readline from 'readline';
//const readline = require( 'readline' );

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputData = [];
let res = [];

rl.on("close", () => {
    console.log(res.join('\n'));
    process.exit(0);
});

rl.on("line", function (data) {
    inputData.push(data);

    if (inputData.length >= 3 && inputData.length == 3 + +inputData[2]) {
        requests();
        rl.close();
    } 
});

function requests() {
    let arrNum = inputData[1].split(' ').map((elem) => +elem);
    let arrReq = inputData.slice(3);

    for (let i = 0; i < arrReq.length; i++) {
        let [command, num] = arrReq[i].split(' ');
        
        switch(command) {
            case '0': {
                arrNum.includes(+num) ? res.push('Yes') : res.push('No');
                break;
            }
            case '1': {
                arrNum = arrNum.map((elem) => elem += +num);
                break;
            }
            case '2': {
                arrNum.push(+num);
                break;
            }
            case '3': {
                let ind = arrNum.indexOf(+num);
                arrNum.splice(ind, 1);
                console.log('arrNum', arrNum)
                break;
            }
        }
    }
}

