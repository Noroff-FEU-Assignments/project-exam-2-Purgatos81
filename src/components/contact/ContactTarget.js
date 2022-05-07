import PropTypes from "prop-types";
import {
    StyledTargetContactContainer
} from "../styles/AdminStyles";

function TargetContact({ Name, Email, Message }) {
    return (
    <StyledTargetContactContainer>
        <h4>{Name}</h4>
        <p>{Email}</p>
        <p>{Message}</p>
    </StyledTargetContactContainer>
    );
}

TargetContact.propTypes = {
    Name: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Message: PropTypes.string.isRequired,
};

export default TargetContact;