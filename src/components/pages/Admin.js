import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import LoginForm from "../forms/LoginForm";


const Admin = () => {
    const [auth, setAuth] = useContext(AuthContext);


    if(auth === null) {
        return (
            <>
                <LoginForm/>
            </>
        );
    } else {

    return (
        <h1>Admin</h1>
    );
    }
};

export default Admin;