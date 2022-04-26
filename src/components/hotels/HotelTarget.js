import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    StyledLinkContainer,
    StyledHotelLink,
    StyledHotelImage,
    StyledListedHotelHeading,
    StyledHotelDescriptionP,
    StyledHotelPriceP,
    StyledHotelPriceSpan
} from "../styles/HotelTargetStyles";

function TargetHotel({ id, Name, Description, Price }) {
    return (
            <StyledLinkContainer>
                <StyledHotelLink to={`details/${id}`}>
                    <StyledHotelImage src="../images/Cabin.jpg" />       
                    <StyledListedHotelHeading>{Name}</StyledListedHotelHeading>
                    <StyledHotelDescriptionP>{Description}</StyledHotelDescriptionP>
                    <StyledHotelPriceP>{Price}<StyledHotelPriceSpan> NOK</StyledHotelPriceSpan></StyledHotelPriceP>
                </StyledHotelLink>
            </StyledLinkContainer>
    );
}

TargetHotel.propTypes = {
    id: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
};

export default TargetHotel;

