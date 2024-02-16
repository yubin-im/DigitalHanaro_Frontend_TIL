import { LoginUser } from "../App"

type Props = {
    loginUser: LoginUser;
    logout: () => void;
};

export const Profile = ({ loginUser, logout }: Props) => {
    return (
    <>
        {loginUser ? (
            <Profile loginUser={loginUser} logout 
        )}
    </>
    );
}