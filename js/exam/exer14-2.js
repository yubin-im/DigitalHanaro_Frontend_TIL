// 1번 유저의 게시글 목록과 댓글을 리턴하는 함수를 작성하시오.
// - 1번 유저의 글목록: https://jsonplaceholder.typicode.com/posts?userId=1
// - 댓글 목록: https://jsonplaceholder.typicode.com/posts/<postId>/comments

// 문제 풀이 

const userId = 1;
const res = await fetch(
  `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
);
const posts = (await res.json()).map(({ id: postId, title }) => ({
  postId,
  title,
}));
console.log('🚀  posts:', posts.length);

async function getCommentsAsync(postId) {
  const cRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return cRes.json();
}

const getCommentsPromi = postId =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(
    cRes => cRes.json()
  );

console.time('comments-serial-request');
for (const post of posts) {
  post.comments = await getCommentsAsync(post.postId);
}

// console.log('🚀  posts:', JSON.stringify(posts, null, '  '));

console.timeEnd('comments-serial-request');

console.time('comments-parelell-request');
const comments = await Promise.allSettled(
  posts.map(post => getCommentsPromi(post.postId))
);
posts.forEach((post, idx) => {
  post.comments = comments[idx];
});

// console.log('🚀  posts:', JSON.stringify(posts, null, '  '));
console.timeEnd('comments-parelell-request');