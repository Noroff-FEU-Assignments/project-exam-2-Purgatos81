import { FooterLink,
FooterContainer } from "../styles/FooterStyles";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();

    function logout() {
        setAuth(null);
        navigate("/");
    }

    return (
        <FooterContainer>
            {auth ? (
                <>
                    | <FooterLink to='/admin'>Admin</FooterLink> | <button onClick={logout}>Log out </button> |
                </>
            ) : (
                <FooterLink to='/login'>Login</FooterLink>
            )}
        </FooterContainer>
    );
};

export default Footer;