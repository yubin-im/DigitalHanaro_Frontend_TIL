console.log('Hello, TypeScript!');

type User = {
    id: number;
    name: string;
};

const s: string = 'abc';
let i = 1;

const hong: User = {id: 1, name: 'Hong'};
const kim: User = {id: 2, name: 'Kim'};

interface UserIf {
    id: number;
    name: string;
    city?: string;
    getName(): string;
}