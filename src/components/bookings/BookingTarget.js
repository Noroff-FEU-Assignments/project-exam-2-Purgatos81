import PropTypes from "prop-types";
import {
    StyledTargetBookingContainer
} from "../styles/AdminStyles";
function TargetBooking({ Hotelname, Name, Email, From, To }) {
    return (
        <StyledTargetBookingContainer>
            <h4>Hotel: {Hotelname}</h4>
            <p>Name: {Name}</p>
            <p>Email: {Email}</p>
            <p>From: {From}</p>
            <p>To: {To}</p>
        </StyledTargetBookingContainer>
        );
}
TargetBooking.propTypes = {
    Hotelname: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    From: PropTypes.string.isRequired,
    To: PropTypes.string.isRequired,
};
export default TargetBooking;