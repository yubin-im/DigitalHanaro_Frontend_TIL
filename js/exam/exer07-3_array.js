// ex1) 배열의 각 원소를 String으로 변환하시오.
// 문제 풀이
const assert = require('assert');

const arr = [1, 2, 3, true];

const ret1 = arr.map(item => item.toString());
console.log("🚀 ~ ret1:", ret1)

assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);


// ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
// 문제 풀이
const classNames = (...args) => 
args.reduce((acc, item) => `${acc}${acc && item && ' '}${item}`, '');

const ret2 = classNames('', 'a b c', 'd', '', 'e'); 
console.log("🚀 ~ ret2:", ret2)

assert.strictEqual(ret2, 'a b c d e');  // 주의: ' a b c d  e'면 안됨!
