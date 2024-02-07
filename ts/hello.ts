console.log('Hello, TypeScript!');

function add(a: number, b: number) {
  return a + b;
}

let rapper = 'Tom';
rapper.length; // OK

// console.bulb('No Pain, No Gain!!');
add(1, 2);

type UserType = {
  id: number;
  name: string;
} & { city?: string };

interface CityIF {
  city: string;
}
interface UserIF extends CityIF {
  id: number;
  name: string;
  getName(): string;
}

class User implements UserType {
  public id: number;
  name: string;
  city?: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}

// const hong: User = { id: 1, name: 'Hong' };
const hong: User = { id: 1, name: 'Hong' };

const s: string = 'abc';
let i = 1;

const xxx = { id: 2, name: 'Kim', addr: 'Seoul' };
const kim: User = { id: 2, name: 'Kim', city: 'Seoul' };

type Addr = { id: number; addr?: string };
const choi: Addr = { id: 1, addr: 'Seoul' };


// 리터럴 타입 
const bt: 'A' | 'B' | 'AB' | 'O' = 'A';
const hour: 12 | 7 = 7;

const n: null = null;
const u: undefined = undefined;

// 유니언 타입
type Member = {
  name: string,
  addr: string,
  discountRate: number;
};

type Guest = {
  name: string,
  age: number,
};

type Customer= Member | Guest;

