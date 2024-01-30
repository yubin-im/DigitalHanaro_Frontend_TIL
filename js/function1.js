function hello() {
    const [name] = arguments;
    console.log(`Hello,${name}!`, arguments);
    return `Hello, ${name}!`;
}

hello('Hong', 'Kim');
return;
const hi = hello;
hi('Kim');
console.log('>>', hi.length, hi.name);

function printFnReturnValue(...args) {
    console.log('args: ', args);
    const [fn, nm] = args;
    console.log('printFnRet>>> ', fn.name. fn(nm));
}

printFnReturnValue(hi, 'Lee');
