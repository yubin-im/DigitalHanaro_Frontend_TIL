
function myEntries(obj) {
    const rets = [];  // [[k, v], [k, v], ...]
    for(let k in Reflect.ownKeys(obj)) {
        console.log(k);
        rets.pushs([k, obj[k]]);
    }
    return rets;
}

myEntries(user);