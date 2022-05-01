import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";


const Admin = () => {
    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();


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