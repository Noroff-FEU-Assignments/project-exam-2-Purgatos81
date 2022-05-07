import PropTypes from "prop-types";
import {
    StyledTargetBookingContainer
} from "../styles/AdminStyles";

function TargetBooking({ Name, Email, Date }) {
    return (
        <StyledTargetBookingContainer>
            <h4>Name: {Name}</h4>
            <p>Email: {Email}</p>
            <p>Date: {Date}</p>
        </StyledTargetBookingContainer>
        );
}

TargetBooking.propTypes = {
    Name: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Date: PropTypes.number.isRequired,
};

export default TargetBooking;