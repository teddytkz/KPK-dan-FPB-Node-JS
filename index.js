const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('First Number : ', (number1) => {
    rl.question('Second Number : ', (number2) => {
        //Cari KPK
        var a, b, c = number1 * number2, d;
        for (i = 1; i <= c; i++) {
            a = i % number1;
            b = i % number2;
            if (a == 0 && b == 0) {
                d = i; // hasil KPK
                break;
            }
        }
        //Cari FPB
        var x = Math.abs(number1)
        var y = Math.abs(number2)
        var z = x % y
        while (z != 0) {
            x = y
            y = z
            z = x % y
        }
        console.log('Hasil KPK dari ' + number1 + " dan " + number2 + " adalah " + d)
        console.log('Hasil FPB dari ' + number1 + " dan " + number2 + " adalah " + y)
        rl.close();
    }
    );
});
