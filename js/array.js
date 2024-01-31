const arr = [1, 2, 3];
console.log("🚀 ~ arr:", {...arr});
console.log("🚀 ~ arr:", arr.entries());
console.log("🚀 ~ arr.length:", arr.length);

arr.length = 20;
arr.push(99);
console.log("🚀 ~ arr:", arr)
console.log(
    'XX',
    arr.map((_, idx) => idx)
);
arr.forEach((item, i) => console.log(i, item));
return;

const a = Array(3);
console.log("🚀 ~ a:", a);

const ar2 = Array(5).fill(1);

// stack
const stack = [];

stack.push(1);
stack.push(2, 3);
console.log("🚀 ~ stack:", stack);
console.log("🚀 ~ stack.pop():", stack.pop());

stack.unshift(1);
stack.unshift(3, 2);

console.log("🚀 ~ stack:", stack);
console.log("🚀 ~ stack.shift():", stack.shift());
console.log("🚀 ~ stack:", stack);

// queue
const queue = [];
const retPush = queue.push(1);

queue.push(1);
queue.push(2, 3);

console.log("🚀 ~ queue:", queue);
console.log("🚀 ~ queue.out:", queue.shift());
console.log("🚀 ~ queue:", queue);

queue.length = 0;
queue.unshift(1);
queue.unshift(3, 2);

console.log("🚀 ~ queue:", queue);
console.log("🚀 ~ queue.out:", queue.pop());
console.log("🚀 ~ queue:", queue);

const idxArr1 = arr.indexOf(1);
console.log("🚀 ~ idxArr1:", idxArr1)
const orr = [{id:1}, {id:2}, {id:1}];

const a1 = [1, 2, 3];

