import { FooterLink,
FooterContainer } from "../styles/FooterStyles";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLink to='/admin'>Admin</FooterLink>
            <FooterLink to='/login'>Login</FooterLink>
        </FooterContainer>
    );
};

export default Footer;