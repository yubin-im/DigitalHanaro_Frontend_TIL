// 다음을 interface로 정의하시오

// type Ud2 = (TUser | TDept) & {addr: string};

interface User {
    id: number;
    name: string;
}
  
interface Dept {
    id: number;
    dname: string;
    captain: string;
}

// type Ud2 = (User | Dept) & {addr: string};

interface Ud2 extends Partial<User>, Partial<Dept>{
    id: number;
    addr: string;
}
  
// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = {id: 1, name: 'HH', addr: 'Seoul'};
const ud3: Ud2 = {id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul'};