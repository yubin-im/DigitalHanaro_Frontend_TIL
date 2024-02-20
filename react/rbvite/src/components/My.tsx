import { useRef } from 'react';
import { Cart, Session } from '../App';
import { Login } from './Login';
import { Profile } from './Profile';

type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: (item: Cart) => void;
};

export const My = ({
  session: { loginUser, cart },
  login,
  logout,
  removeItem,
  saveItem,
}: Props) => {
  // if (loginUser) loginUser.name = 'XXXXXXX';
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const saveCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    const name = itemNameRef.current?.value;
    const price = Number(itemPriceRef.current?.value);
    // if (!name || isNaN(price) || !price) {
    if (!name) {
      alert('상품명을 정확히 입력하세요!');
      return;
    } else if (isNaN(price) || !price) {
      alert('가격을 정확히 입력하세요!');
      return;
    }

    saveItem({ id: 0, name, price });
  };

  return (
    <div
      style={{ border: '2px solid red', marginBottom: '2rem', padding: '1rem' }}
    >
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}

      <ul>
        {cart.map(({ id, name, price }: Cart) => (
          <li key={id}>
            <small>{id}.</small>
            {name} ({price.toLocaleString()}원)
            <button onClick={() => removeItem(id)}>X</button>
          </li>
        ))}
      </ul>
      <form onSubmit={saveCartItem}>
        <input type='text' ref={itemNameRef} placeholder='상품명...'></input>
        <input type='number' ref={itemPriceRef} placeholder='금액...'></input>
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};
