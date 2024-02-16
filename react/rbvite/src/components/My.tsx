import { Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  login: () => void;
  logout: () => void;
};

export const My = ({ session: { loginUser }, login, logout }: Props) => {
  return (
    <>{loginUser ? <Profile logout={logout} /> : <Login login={login} />}</>
  );
};

// const My = ({ session: { loginUser, cart }, login, logout }: Props) => {
//   console.log('@@@My');
//   return (
//     <>
//       {loginUser ? (
//         <Profile loginUser={loginUser} logout={logout} />
//       ) : (
//         <Login login={login} />
//       )}
//       <ul>
//         {cart.map(({ id, name, price }) => (
//           <li key={id}>
//             {name}({price})
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default My;
