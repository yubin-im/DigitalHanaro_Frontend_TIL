// 다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empDept를 만들고, 개발팀 직원 이름 목록을 출력하시오. (key: id)

const hrTeam = {id: 1, dname: '인사팀'};
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];

const hong = {id: 1, name: 'Hong', dept: 1};
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];


const deptMap = new Map();
deptMap.set(1, hrTeam);
deptMap.set(2, devTeam);
console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)

// 문제 풀이
const deptMap_ = new Map(depts.map(dept => [dept.id, dept]));
console.log('풀이: ', deptMap_);


const empMap = new Map();
empMap.set(1, hong);
empMap.set(2, kim);
console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

// 문제 풀이
const empMap_ = new Map(emps.map(emp => [emp.id, emp]));
console.log('풀이: ', empMap_);


const empDept = new Map();
const { id, name, ...rest } = hong;
const hongExceptDept = { id, name };

empDept.set(hongExceptDept, hrTeam);
empDept.set(kim, devTeam);
empDept.set(emps[2], devTeam);
empDept.set(emps[3], devTeam);
console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

// 문제 풀이
const empDept_ = new Map();
const xx = emps.map(({ id, name, dept }) => [{ id, name }, deptMap.get(dept)]);
console.log("🚀 ~ xx:", xx)

console.log(empDept.get(kim).dname); // '개발팀'
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
