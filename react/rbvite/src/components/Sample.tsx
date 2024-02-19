import { ChangeEvent, useState } from 'react';

export default function Sample() {
  const [nickname, setNickname] = useState('HONG');
  const [address, setAddress] = useState('서울');
  const [age, setAge] = useState('20');

  const CITIES = ['서울', '대전', '대구', '부산', '창원'];

  const changeNickname = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.currentTarget.value);

  const changeAge = (e: ChangeEvent<HTMLInputElement>) =>
    setAge(e.currentTarget.value);

  return (
    <>
      <div>
        <h1>Sample</h1>
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
      </div>
    </>
  );
}
