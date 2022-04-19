import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
width: 100%;
height: ${(props) => (props.extendNavbar ? "100%" : "80px")};
background-color: #082E2F;
display: flex;
flex-direction: column;
`;

export const NavInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;


export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    align-items: flex-end;
    padding-right: 50px;
`;

export const NavLinkContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const NavLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const Logo = styled.h2`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
`;

export const NavLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;

export const OpenMenuButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 701px) {
        display: none;
    }
`;

export const NavExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 701px) {
        display: none;
    }
`;