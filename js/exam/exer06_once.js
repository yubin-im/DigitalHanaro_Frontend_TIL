// 함수를 한번만 실행하게 하는 once 함수를 작성하시오.
function once(f, thisValue) {
    let didRun = false;
  
    return function (...args) {
      return f(...args);
      // return f.call(thisValue, ...args);
      // return f.apply(thisValue, args);
      // return f.bind(thisValue)(...args);
    };
  }
  
  // const once = (f) =>

  const thisObj1 = { id: 100 };
  const thisObj2 = { id: 200 };

  // const f = (x, y) => `끝번호 ${x}, ${y}입니다! ${this.id}`;
  function f(x, y) {
    return `끝번호 ${x}, ${y}입니다! ${this.id}`;
  }

  // console.log(f.call(thisObj, 1, 6));
  // const fn = once(f.bind(thisObj));
  const fn = once(f);

  // console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
  console.log(fn.call(thisObj1, 1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!

  // console.log(fn.call(thisObj2, 2, 7)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
  // console.log(fn(2, 7)); // undefined
  console.log(fn(3, 8)); // undefinedㄴ