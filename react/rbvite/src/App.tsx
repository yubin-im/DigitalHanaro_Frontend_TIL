import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hello from './components/Hello';
import My from './components/My';
import './App.css';

// // {ss: 'FirstComponent'}
// // function H5(prop: { ss: string }) {
// function H5({ ss }: { ss: string }) {
//   return <h5>H55555-{ss}</h5>;
// }

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  function useState<T>(defValue: T) {}

  // const plusCount = () => setCount(count + 1);

  const plusCount = () => setCount((prevCount) => prevCount + 1);
  const login = () => {};
  const logout = () => {};

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React</h1>
      <H5 ss={`First-Component`} />
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
