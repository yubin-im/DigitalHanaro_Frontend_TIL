// 1. for문을 이용하여 다음과 같이 정확한 숫자!를 출력하는 코드를 작성하시오.
// 0.1~0.9까지 0.1 단위로 출력
function ex02_1() {
    for(let i = 0.1; i < 1; i += 0.1) {
        i = Math.floor(i * 100) / 100;
        console.log(i);
    }
}
ex02_1();


// 2. 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오. (단 소수점 자리수는 긴쪽에 맞춘다.)
// addPoints(0.21354, 0.1)   // 0.31354
// addPoints(0.14, 0.28)     // 0.42
// addPoints(0.34, 0.226)    // 0.566
function addPoints(a, b) {
    const aPoints = (a).toString().split('.');
    const bPoints = (b).toString().split('.');

    let sum = a + b;

    if (aPoints[1].length > bPoints[1].length) {
        console.log(a, '+', b, '=', sum.toFixed(aPoints[1].length));
    } else {
        console.log(a, '+', b, '=', sum.toFixed(bPoints[1].length));
    }
}
addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226);


// 3. 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}
const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'};

const {id, name, addr} = user;
const userInfo = {id, name, addr};

console.log('userInfo: ', userInfo);


// 4. 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.
const arr = [[{id: 1}], [{id:2}, {id: 3}]];

const id1 = arr[0][0].id;
const id2 = arr[1][0].id;
const id3 = arr[1][1].id;

console.log(id1, id2, id3);
