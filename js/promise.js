// Promise - basic pattern

const promi = new Promise((resolve, reject) => {
    setTimeout(() => {
        const now = Date.now();
        if (now % 2 === 0) resolve(console.log('fulfill', now));
        else reject(new Error('어디로?'));
    }, 1000);
});

console.log(promi);

promi.then(
    succ => console.log('Resolve!'),
    fail => console.log('Reject!', fail)
);

// 결정되지 않은 프로미스 방지하기
const promi2 = new Promise((resolve, reject) => {
    resolve('SUCC');

    setTimeout(() => resolve('OK'), 5000);

    setTimeout(() => {
        reject(new Error('Timeout!'));
        // 또는 resolve('skip!');
    }, 10000);
});


// Promise - state
const promi3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const now = Date.now();
        if (now % 2 === 0) resolve(console.log('fulfill', now));
        else reject(new Error('어디로?'));
    }, 1000);
});

console.log(promi);

promi.then(
    succ => console.log('Resolve!', succ, promi),
    err => console.log('Reject!', err, promi)
);


// Promise - then & catch & finally
const promi4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const now = Date.now();
        if (now % 2 === 0) resolve(now);
        else reject(new Error('어디로?'));
    }, 1000);
});

