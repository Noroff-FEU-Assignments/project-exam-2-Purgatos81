import { useState, useEffect } from "react";
import TargetBooking from "./BookingTarget";
import { BookingAPI } from "../utils/Api";

function BookingList() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        async function fetchData() {
            try {
                const response = await fetch(BookingAPI);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json.data);
                    setBookings(json.data);
                } else {
                    setError("An error occured");
                }
            } catch (error) {
                setError(error.toString());
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }
    return (
        <>
            {bookings.map(function (booking) {
                console.log(booking.attributes);
                return <TargetBooking
                Name={booking.attributes.Name}
                Email={booking.attributes.Email}
                Date={booking.attributes.Date} />;
            })}
        </>
    );
}

export default BookingList;