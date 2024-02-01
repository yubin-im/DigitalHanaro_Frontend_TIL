// 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
// 배열의 각 요소를 제곱   n => n ** 2            [square]
// 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
// 배열의 각 요소를 세제곱  n => n ** 3            [cube]
// 문제 풀이
const assert = require('assert');

const arr = [1, 2, 3, 4, 5];
const square = n => n ** 2;
const cube = n => n ** 3;

const ret3_1 = arr
    .map(a => a ** 2)
    .map(Math.sqrt)
    .map(a => a ** 3);

console.log("🚀 ~ ret3_1:", ret3_1)
assert.deepStrictEqual(ret3_1, [1, 8, 27, 64, 125]);

// square(2) => Math.sqrt(4) => cube
const ret3_2 = [square, Math.sqrt, cube].reduce((acc, f) => f(acc), 2);
const bp1 = n => [square, Math.sqrt, cube].reduce((acc, f) => f(acc), n);
console.log("🚀 ~ ret3_2:", ret3_2, bp1(2));

const ret3_3 = arr.map(a => bp1(a));
console.log("🚀 ~ ret3_3:", ret3_3);
assert.deepStrictEqual(ret3_3, [1, 8, 27, 64, 125]);

const bpm= (fns, n) => fns.reduce((acc, f) => f(acc), n);

const ret3_4 = bpm([square, Math.sqrt, cube], 2);
console.log("🚀 ~ ret3_4:", ret3_4)
