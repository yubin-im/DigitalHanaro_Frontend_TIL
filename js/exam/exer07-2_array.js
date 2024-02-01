// 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
// 문제 풀이

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!

const addUser = user => [...users, user];
const removeUser = user => users.filter(_user => user.id != _user.id);
const changeUser = (oldUser, newUser) => users.map(_user => (_user.id === oldUser.id ? newUser : _user));

console.log('add>>', addUser(hong));  // [kim, lee, park, hong]
console.log('remove>>', removeUser);  // [kim, park]
console.log('change>>', changeUser(kim, choi));  // [choi, lee, park]
