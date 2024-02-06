// 다음 users를 이용하여 <table>을 작성하세요.
const users = [
    { id: 1, name: '홍길동', tel: '01088889991', addr: '서울' },
    { id: 2, name: '김길동', tel: '01088889992', addr: '부산' },
    { id: 3, name: '이길동', tel: '01088889993', addr: '서울' },
    { id: 4, name: '박길동', tel: '01088889994', addr: '서울' },
  ];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

// head
let head = document.createElement('tr');
for (let i = 0; i < 4; i += 1) {
  let row = document.createElement('th');
  row.innerHTML = Object.keys(users[0])[i];
  head.appendChild(row);
}
thead.appendChild(head);

// body
for (let i = 0; i < 4; i += 1) {
  let row = document.createElement('tr');

  for (let j = 0; j < 4; j += 1) {
    let data = document.createElement('td');
    data.innerHTML = Object.values(users[i])[j];
    row.appendChild(data);
  }

  tbody.appendChild(row);
}