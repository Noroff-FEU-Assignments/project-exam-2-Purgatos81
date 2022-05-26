import styled from "styled-components";
export const BookingFormContainer = styled.div`
    min-height: 100vh;
`;
export const BookingHeadingContainer = styled.div`
    background-color: #58D1AE80;
    margin: 0;
    display: flex;
    justify-content: center;
`;
export const BookingHeading = styled.h2`
    color: #082E2F;
    margin: 0;
    padding: 50px 0;
    font-size: 2.5em;
    font-weight: 600;
`;
export const StyledBookingForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 20% 0 20%;

`;
export const StyledBookingLabel = styled.label`
    font-size: 1.3em;
    font-weight: 600;
`;
export const StyledBookingAsterix = styled.span`
    color: red;
`;
export const StyledBookingHotelInput = styled.input`
    padding: 5px;
    margin: 15px 0px;
    border: none;
    font-size: large;
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
export const StyledBookingInput = styled.input`
    padding: 5px;
    margin: 15px 0px;
`;
export const StyledBookingTextarea = styled.textarea`
    padding: 5px 5px 60px 5px;
    margin: 15px 0px 30px 0px;
`;
export const StyledBookingButton = styled.button`
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