const f1_org = function(f, val) {
    return f(val);  // fx1(2)
};

const f1 = (f, val) => f(val);
f1(console.log,'abc');

function fx1(a) {
    return a ** 2;
}

console.log('::>>', f1(fx1, 2));

const f2 = function(f) {
    return function(...args) {
        f(...args);
    }
}; 

const X = f2(Math.max);
const result = X(1, 3, 4, 5, 2);
console.log('result: ', result);

const arr = ['1', '2', '3'];
const rets = arr.map(parseInt);
Array.prototype.map = function(f) {
    for(let i = 0; i < this.length; i += 1) {
        f(this[i],i, this);
    }
    return result;
};

console.log(rets);
