import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TargetSearchHotel({ id, Name, }) {
    return (
        <Link to={`/details/${id}`}>
            <h4>{Name}</h4>
        </Link>
    );
}

TargetSearchHotel.propTypes = {
    id: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired,
};

export default TargetSearchHotel;