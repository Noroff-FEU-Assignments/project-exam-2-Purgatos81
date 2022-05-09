import PropTypes from "prop-types";
import {
    StyledTargetBookingContainer
} from "../styles/AdminStyles";

function TargetBooking({ Name, Email, From, To }) {
    return (
        <StyledTargetBookingContainer>
            <h4>Name: {Name}</h4>
            <p>Email: {Email}</p>
            <p>From: {From}</p>
            <p>To: {To}</p>
        </StyledTargetBookingContainer>
        );
}

TargetBooking.propTypes = {
    Name: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    From: PropTypes.number.isRequired,
    To: PropTypes.number.isRequired,
};

export default TargetBooking;