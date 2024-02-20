import { ChangeEvent, useState, useRef } from 'react';

const CITIES = ['서울', '대전', '대구', '부산', '창원'];

export default function Sample() {
  const [nickname, setNickname] = useState('HONG');
  const [address, setAddress] = useState('서울');
  const [age, setAge] = useState('20');

  const nameChangeCnt = useRef(0);

  const changeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
    console.log('***************', nickname, nameChangeCnt);
    nameChangeCnt.current += 1;
  };

  const changeAge = (e: ChangeEvent<HTMLInputElement>) =>
    setAge(e.currentTarget.value);

  return (
    <>
      <div>
        <h5>
          NickName: {nickname}({age}세) - {address}
        </h5>
        <input type='text' value={nickname} onChange={changeNickname} />
        <input type='number' value={age} onChange={changeAge} />
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.currentTarget.value)}
        />
        <select onChange={(e) => setAddress(e.currentTarget.value)}>
          {CITIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button onClick={() => alert(nameChangeCnt.current)}>TTT</button>
      </div>
    </>
  );
}
