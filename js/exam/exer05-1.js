const arr = [100, 200, 300, 400, 500, 600, 700];

console.log('1. for-in 문을 사용하여 배열의 인덱스를 출력하시오.');
for(let idx in arr) {
    console.log(idx);
}

console.log('2. for-in 문을 사용하여 배열의 원소(값)를 출력하시오.');
for(let idx in arr) {
    console.log(arr[idx]);
}

const obj = {name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false};

console.log('3. for-in 문을 사용하여 프로퍼티 이름(키)을 출력하시오.');
for(let key in obj) {
    console.log(key);
}

console.log('4. for-in 문을 사용하여 프로퍼티 값을 출력하시오.');
for(let key in obj) {
    console.log(`${obj[key]}`);
}
// 풀이 방법
for(let k in obj) {
    console.log(obj[k]);
}

console.log('5. for-of 문을 사용하여 프로퍼티 값을 출력하시오.');
for(let value of Object.values(obj)) {
    console.log(value);
}
// 풀이 방법
for(let k of Reflect.ownKeys(obj)){
    console.log(k);
}

console.log('6. level 프로퍼티가 열거되지 않도록 설정하시오.');
delete obj.level;
for(let key in obj) {
    console.log(key);
}
// 풀이 방법
Object.defineProperty(obj, 'level', { enumerable: false });
console.log(Object.entries(obj));

console.log('7. role 프로퍼티는 읽기전용으로 설정하시오.')
// 풀이 방법
Object.defineProperty(obj, 'role', { writable: false });
obj.role = 'XXXXXXXX';
console.log('role>>', obj.role);
