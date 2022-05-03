import PropTypes from "prop-types";

function TargetContact({ Name, Email, Message }) {
    return (
    <div>
        <h4>{Name}</h4>
        <p>{Email}</p>
        <p>{Message}</p>
    </div>
    );
}

TargetContact.propTypes = {
    Name: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Message: PropTypes.string.isRequired,
};

export default TargetContact;