const arr = [100, 200, 300, 400, 500, 600, 700];

console.log('1. for-in 문을 사용하여 배열의 인덱스를 출력하시오.');
for(const idx in arr) {
    console.log(idx);
}

console.log('2. for-in 문을 사용하여 배열의 원소(값)를 출력하시오.');
for(const idx in arr) {
    console.log(arr[idx]);
}

const obj = {name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false};

console.log('3. for-in 문을 사용하여 프로퍼티 이름(키)을 출력하시오.');
for(const key in obj) {
    console.log(key);
}

console.log('4. for-in 문을 사용하여 프로퍼티 값을 출력하시오.');
for(const key in obj) {
    console.log(`${obj[key]}`);
}

console.log('5. for-of 문을 사용하여 프로퍼티 값을 출력하시오.');
for(const value of Object.values(obj)) {
    console.log(value);
}

console.log('6. level 프로퍼티가 열거되지 않도록 설정하시오.');
delete obj.level;
for(const key in obj) {
    console.log(key);
}

