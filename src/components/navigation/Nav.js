import { useState } from "react";
import { 
    NavContainer,
    NavLink,
    Logo,
    NavLinkContainer,
    NavInnerContainer,
    LeftContainer,
    RightContainer,
    NavLinkExtended,
    OpenMenuButton,
    NavExtendedContainer 
} from "../styles/NavStyles";

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <NavContainer extendNavbar={openNav}>
            <NavInnerContainer>
                <LeftContainer>
                    <NavLinkContainer>        
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/hotels'>Hotels</NavLink>
                        <NavLink to='/contact'>Contact Us</NavLink>
                        <OpenMenuButton
                            onClick={() => {
                                setOpenNav((curr) => !curr);
                            }}
                        >
                            {openNav ? <>&#10005;</> : <> &#8801;</>}
                        </OpenMenuButton>
                    </NavLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo>Nordic Light Hotels</Logo>
                </RightContainer>
            </NavInnerContainer>
            {openNav && (
            <NavExtendedContainer>
                <NavLinkExtended to='/'>Home</NavLinkExtended>
                <NavLinkExtended to='/hotels'>Hotels</NavLinkExtended>
                <NavLinkExtended to='/contact'>Contact Us</NavLinkExtended>
            </NavExtendedContainer>
            )}        
        </NavContainer>
    );
};

export default Nav;