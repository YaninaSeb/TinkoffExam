import readline from 'readline';
//const readline = require( 'readline' );


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let str = '';
let res = '';

rl.on("close", () => {
    console.log(res);
    process.exit(0);
});

rl.on("line", function (data) {
    str += data;

    if (str.length === 2) {
        if (/[a-z]/.test(str) && /[0-9]/.test(str)) {
            res = 'YES';
        } else {
            res = 'NO';
        }
        rl.close();
    } else {
        rl.close();
    }
});

