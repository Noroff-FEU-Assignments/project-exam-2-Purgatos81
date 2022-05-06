import PropTypes from "prop-types";

function TargetBooking({ Name, Email, Date }) {
    return (
        <div>
            <h4>{Name}</h4>
            <p>{Email}</p>
            <p>{Date}</p>
        </div>
        );
}

TargetBooking.propTypes = {
    Name: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Date: PropTypes.number.isRequired,
};

export default TargetBooking;