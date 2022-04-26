import styled from "styled-components";

export const ContactFormPageContainer = styled.div`
    min-height: 100vh;
`;

export const HeadingContainer = styled.div`
    background-color: #58D1AE80;
    margin: 0;
    display: flex;
    justify-content: center;
`;

export const ContactHeading = styled.h2`
    color: #082E2F;
    margin: 0;
    padding: 50px 0;
    font-size: 2.5em;
    font-weight: 600;
`;

export const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 20% 0 20%;

`;

export const StyledContactLabel = styled.label`
    font-size: 1.3em;
    font-weight: 600;
`;

export const StyledAsterix = styled.span`
    color: red;
`;

export const StyledInput = styled.input`
    padding: 5px;
    margin: 15px 0px;
`;

export const StyledTextarea = styled.textarea`
    padding: 5px 5px 60px 5px;
    margin: 15px 0px 30px 0px;
`;

export const StyledContactButton = styled.button`
    width: 200px;
    align-self: center;
    cursor: pointer;
    background-color: #082E2F;
    border: #58D1AE 5px solid;
    border-style: none;
    padding: 10px 0;
    border-radius: 5px;
    color: white;
    :hover {
        box-shadow: 0 0 10px #082E2F;
    }
`;

