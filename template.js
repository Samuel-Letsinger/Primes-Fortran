// made this template to help me translate it into Fortran
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function idk(N, g) {
    let r = 1;
    while (true) {
        let ans = Math.pow(g, r) % N;
        if (ans == 1) break;
        r++;
    }

    let prev1 = Math.pow(g, r / 2) + 1;
    let prev2 = N;
    // using euclids algorithm to get prime number #1
    while (true) {
        let current = prev1 % prev2;
        if (current == 0) return prev2;
        prev1 = prev2;
        prev2 = current;
    }
}

let arguments = process.argv.slice(2);

let N = arguments[0] || 77;
let g = arguments[1] || 8;

let p = idk(N, g);
// using simple math to get prime #2
let q = N / p;

// if prime #1 times prime #2 is equal to N
if (p * q == N) {
    console.log(`Worked\n${p} * ${q} = ${N}`);
    console.log(`is "p" prime? ${isPrime(p)}`);
    console.log(`is "q" prime? ${isPrime(q)}`);
} else {
    console.log(`Something isn't right\n${p} * ${q} != ${N}`);
    console.log(`is "p" prime? ${isPrime(p)}`);
    console.log(`is "q" prime? ${isPrime(q)}`);
}

/*

N = p * q
N = 77
g = 8
g^r = mN + 1
g^r - 1 = mN
(g^(r/2)+1)(g^(r/2)-1) = mN
g % N = 44
N % 44 = 33
44 % 33 = 11
33 % 11 = 3 R 0
p = (g^(r/2)+1) = 11
q = N / p = 7
N = p * q = 11 * 7 = 77

*/
