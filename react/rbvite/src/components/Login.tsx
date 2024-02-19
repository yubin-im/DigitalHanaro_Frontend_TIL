import { FormEvent, useRef } from 'react';

type Props = {
  login: (id: number, name: string) => void;
};

export const Login = ({ login }: Props) => {
  // const [id, setId] = useState(0);
  // const [name, setName] = useState('');
  const idRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const makeLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit 기본 기능을 무력화!

    console.log(`makeLogin#${idRef.current?.value}#`);

    if (!idRef.current || !idRef.current.value) {
      alert('User ID를 입력하세요!');
      idRef.current?.focus();
      return;
    } else if (!nameRef.current?.value) {
      alert('User Name를 입력하세요!');
      idRef.current?.focus();
      return;
    }

    const id = idRef.current.value;
    const name = nameRef.current.value;

    login(+id, name);
  };

  return (
    <>
      <form onSubmit={makeLogin}>
        <div>
          <span style={{ marginRight: '1em' }}>LoginID:</span>
          <input type='number' ref={idRef} />
        </div>
        <div>
          LoginName:
          {/* <input type='text' onChange={(e) => setName(e.currentTarget.value)} /> */}
          <input type='text' ref={nameRef}></input>
        </div>
        <button type='submit'>Sign-in</button>
      </form>
    </>
  );
};
