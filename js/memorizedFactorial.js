// O(N)
function factoriaBeforeMemoization(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log('fbm3: ', factoriaBeforeMemoization(3));


// O(logN)
const memoizedTable = {}; // {5: 5 * 24, 4: 4 * 6
                          //  3: 3 * 2, 2: 2 * 1}

function factorial(n) {
  runCnt += 1;
  if (n === 1) return 1;
  return memoizedTable[n] 
        || (memoizedTable[n] = n * factorial(n - 1));
}

function memoized(fn) {
    const memoizedTable = {};
    return function (k) {
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    };
}

function memoizedFactorial(n) {
    return memoized(function (n) {
        if (n === 1) return 1;
        return n * memoizedFactorial(n - 1);
    });
}

const f3 = factorial(3);
console.log('🚀  f3:', f3, runCnt);
runCnt = 0;
const f5 = factorial(5);
console.log('🚀  f5:', f5, runCnt);

