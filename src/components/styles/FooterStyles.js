import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #082E2F;
    padding: 0 80px;
`

export const FooterAdminContainer = styled.div`

`;

export const FooterIconsContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    color: white;
    padding-right: 20px;
`;

export const FooterLink = styled(Link)`
    color: White;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;

export const FooterButton = styled.button`
    background-color: #082E2F;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: x-large;
    cursor: pointer;
`;