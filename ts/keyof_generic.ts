interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

type Y<T> = {
    [x in keyof T]: T[x]
}

type YDept = Y<IDept>;


type Z<T, K extends keyof T> = {
    [x in K]: T[x]
}

type ZDept = Z<IDept, 'id' | 'age'>;
