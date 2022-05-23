import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function TargetSearchHotel({ id, Name, Price }) {
    return (
        <Link to={`/details/${id}`}>
            <h4>{Name}</h4>
            <p>{Price}</p>
        </Link>
    );
}
TargetSearchHotel.propTypes = {
    id: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
};
export default TargetSearchHotel;