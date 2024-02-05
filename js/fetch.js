// if (isAsyncAwait) {
//     const res = await fetch(sampleUrl);
//     const data = await res.json();
//     console.log("🚀 ~ data:", data);
// } else {
//     fetch(sampleUrl)
//     .then(res => res.json())
//     .then(data => console.log('data>>', data));
// }

const promiFetch = url => new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(resolve);
});

const asyncFetch = async url => {
    const res = await fetch(url);
    return res.json();
};

// const fn = promiFetch;
// const fn = asyncFetch;

const data = await promiseFetch(sampleUrl);
console.log("🚀 ~ data:", data)

const data2 = await asyncFetch(sampleUrl);
console.log("🚀 ~ data:", data)


// 다음 함수가 2초 후 리턴하도록 await과 Promise를 이용하여 sleep 해 보세요.
const f = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  
    if (!res.ok) throw new Error("Failt to Fetch!!");
    await new Promise(resolve => setTimeout(resolve, 2000));
    const data = await res.json();
  
    return data.name;
  };
  
  console.log(await f());