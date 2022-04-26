import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TargetHotel({ id, Name, Description, Hotelimage }) {
    return (
        <Link to={`details/${id}`}>
            <h4>{Name}</h4>
            <p>{Description}</p>
        </Link>
    );
}

TargetHotel.propTypes = {
    id: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
};

export default TargetHotel;

