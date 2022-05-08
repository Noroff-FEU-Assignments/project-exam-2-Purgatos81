import styled from "styled-components";

export const DetailsBody = styled.div`
    min-height: 100vh;
`;

export const StyledDetailsInfoContainer = styled.div`

    @media (min-width: 701px) {
        display: flex;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`;

export const DetailsImgStyles = styled.img`
        @media (min-width: 701px) {
        max-width: 50%;
        margin: 40px 60px 40px 10%;
        border-radius: 5px;
    }
`;

export const StyledTextContainer = styled.div`
        @media (min-width: 701px) {
        padding-right: 10%;
    }
    @media (max-width: 700px) {
        margin-left: 10%;
        margin-right: 10%;
    }
`;

export const StyledDetailsPriceP = styled.p`
    margin-left: 10%;
`;

export const StyledDetailPriceSpan = styled.span`
    color: Black;
    font-style: italic;
`