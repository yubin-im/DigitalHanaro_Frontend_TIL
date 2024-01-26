const user = {id: 1, name: 'P', age: 33};
const {name: n, age = 30} = {name: 'Lee'};

const fn = ({age}) => age;
// 위의 코드랑 같음
// function fn({age}) {
//     return age;
// }

const {age2: age3 = fn(user)} = {age22: 20, age2: 33}; 

// 반복문 for 
class Dog {}
const lucy = new Dog();

function f(a, b, ...c) {
    console.log('a: ', [...arguments]);
    console.log('c: ', c);

    for(const x of c) {
        console.log('ccc>>', x);
    }
}
f(1, 2, 3, 4);
