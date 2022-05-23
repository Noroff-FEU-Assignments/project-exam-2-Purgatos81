import { 
    FooterLink,
    FooterContainer,
    FooterAdminContainer,
    FooterIconsContainer,
    FooterButton
} from "../styles/FooterStyles";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    const [auth, setAuth] = useContext(AuthContext);
    const navigate = useNavigate();
    function logout() {
        setAuth(null);
        navigate("/");
    }
    return (
        <FooterContainer>
            <FooterAdminContainer>
                {auth ? (
                    <>
                        <FooterLink to='/admin'>Admin</FooterLink><FooterButton onClick={logout}>Log out </FooterButton>
                    </>
                ) : (
                    <FooterLink to='/login'>Login</FooterLink>
                )}
            </FooterAdminContainer>
            <FooterIconsContainer>
                    <TwitterIcon />
                    <FacebookIcon />
                    <InstagramIcon />
            </FooterIconsContainer>
        </FooterContainer>
    );
};
export default Footer;