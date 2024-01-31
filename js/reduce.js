// objs의 각 원소를 reduce를 이용하여 합쳐보세요.
// {id: 5, name: 'Hong', addr: 'Seoul'} 으로 출력되도록 
const objs = [ {id: 1}, {name: 'Hong'}, {addr: 'Seoul', id: 5}];

const obj = objs.reduce((acc, item) => ({ ...acc, ...item }), {});
console.log('🚀  obj:', obj);