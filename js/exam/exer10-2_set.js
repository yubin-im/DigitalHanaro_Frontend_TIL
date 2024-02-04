// 이전 Array.prototype에 Set을 이용하여 uniqBy() 함수도 추가하시오.

const hong = {id: 1, name: 'Hong', dept: 'HR'};
const kim = {id: 2, name: 'Kim', dept: 'Server'};
const lee = {id: 3, name: 'Lee', dept: 'Front'};
const park = {id: 4, name: 'Park', dept: 'HR'};
const ko = {id: 7, name: 'Ko', dept: 'Server'};
const loon = {id: 6, name: 'Loon', dept: 'Sales'};
const choi = {id: 5, name: 'Choi', dept: 'Front'};
const users = [ hong, kim, lee, park, ko, loon, choi ];


Array.prototype.uniqBy = function(prop) {
    return [...new Set(this.map(item => item[prop]))];
};

Array.prototype.filterBy = function(prop, value) {
    return this.filter(item => item[prop] === value);
};

Array.prototype.findBy = function(prop, value) {
    return this.find(item => item[prop] === value);
}

Array.prototype.sortBy = function(prop, direction = 'asc') {
    const flag = direction.toLowerCase() === 'asc' ? 1 : -1;
    // return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
    return this.toSorted((a, b) => {
        if (typeof a[pop] === 'string') return a[prop].localeCompare(b[prop])
        localeCompare(b[prop]);

        return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
    })
}

users.uniqBy('dept'); // [ 'HR', 'Server', 'Front', 'Sales' ]
