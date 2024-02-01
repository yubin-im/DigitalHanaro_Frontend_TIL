// class와 Array를 이용하여 Stack과 Queue를 구현하시오.

// ex1) Stack
class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    push(n) {
        this.stack[this.size] = n;
        this.size += 1;
    }

    pop() {
        if (this.size <= 0) {
            return;
        }

        const popStack = this.stack[this.size - 1];
        delete this.stack[this.size - 1];
        this.size -= 1;
        return popStack;
    }
}

const stack = new Stack(); // or new Stack([1,2]); // (1,2)

stack.push(3); // 추가하기
console.log("🚀 ~ stack:", stack)

console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
console.log("🚀 ~ stack:", stack)


// ex2) Queue
class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    enqueue(n) {
        this.queue[this.size] = n;
        this.size += 1;
    }

    dequeue() {
        if (this.size <= 0) {
            return;
        }

        const deQueue = this.queue[this.size - 1];
        delete this.queue[0];
        this.size -= 1;
        return deQueue;
    }
}

const queue = new Queue();

queue.enqueue(3); // 추가하기
console.log("🚀 ~ queue:", queue)

console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
console.log("🚀 ~ queue:", queue)
