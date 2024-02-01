// 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
// 배열의 각 요소를 제곱   n => n ** 2            [square]
// 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
// 배열의 각 요소를 세제곱  n => n ** 3            [cube]
// 문제 풀이

const arr = [1, 2, 3, 4, 5];

const ret3_1 = arr
    .map(a => a ** 2)
    .map(Math.sqrt)
    .map(a => a ** 3);

console.log("🚀 ~ ret3_1:", ret3_1)
