// 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.

// 문제 풀이
function* add() {
    const a = yield '첫 번째 수?';
    const b = yield '두 번째 수?';
    return a + b;
  }
  
  const itAdd = add();
  console.log(itAdd.next().value);
  console.log(itAdd.next(1).value);
  console.log('result=', itAdd.next(2).value);