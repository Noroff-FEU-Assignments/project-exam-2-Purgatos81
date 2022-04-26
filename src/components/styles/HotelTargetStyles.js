import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHotelsMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #58D1AE90;
`;

export const StyledHotelsHeading = styled.h1`
    color: #082E2F;
`;


export const StyledHotelsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 10% 20px 10%;
`;

export const StyledLinkContainer = styled.div`
    max-width: 37%;
    min-width: 200px;
    margin: 30px;
    background-color: white;
    box-shadow: 10px 10px 10px grey;
    border-radius: 5px;
    border-left: 1px solid rgba(0,0,0,.125);
    transition-property: box-shadow;
    transition-duration: 0.1s;
    :hover {
        box-shadow: 20px 20px 10px grey;
    }
`;

export const StyledHotelLink = styled(Link)`
    text-decoration: none;
`;

export const StyledHotelImage = styled.img`
    max-width: 100%;
    border-radius: 5px 5px 0 0;
`;

export const StyledListedHotelHeading = styled.h3`
    color: Black;
    margin-left: 20px;
`;

export const StyledHotelDescriptionP = styled.p`
    color: Black;
    margin-left: 20px;
`;

export const StyledHotelPriceP = styled.p`
    color: Black;
    margin-left: 20px;
`;

export const StyledHotelPriceSpan = styled.span`
    color: Black;
    font-style: italic;
`