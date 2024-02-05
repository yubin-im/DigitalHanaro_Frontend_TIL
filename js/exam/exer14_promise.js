setTimeout( function() {
  console.log('depth1', new Date());
  setTimeout( function() {
    console.log('depth2', new Date());
    setTimeout( function() {
      console.log('depth3', new Date());
      throw new Error('Already 3-depth!!');
    }, 3000 );
  }, 2000);
}, 1000);

console.log('START!', new Date());


// 위의 코드를 Promise를 이용하여 refactoring 하시오.
const depthTimer = depth => 
  new Promise((resolve, reject) => {
    setTimeout(() => console.log('depth' + depth, new Date()), depth * 1000);
    resolve(depth + 1);
    console.log('*************')
})

depthTimer(1)
    .then(depthTimer)
    .then(depthTimer)
    .catch(err => console.error(err));

console.log('START!', new Date());