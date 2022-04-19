import { useState, useEffect } from "react";
import { HotelsAPI } from "../utils/Api";

function HotelList() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        async function fetchData() {
            try {
                const response = await fetch(HotelsAPI);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setHotels(json.data);
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
            {hotels.map(function (hotel) {
                console.log(hotel.attributes);
                return <div key={hotel.id}>
                    <h2>{hotel.attributes.Name}</h2>
                    <p>{hotel.attributes.Description}</p>
                </div>;
            })}
        </>
    );
}

export default HotelList;