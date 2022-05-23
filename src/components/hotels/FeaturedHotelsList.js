import { useState, useEffect } from "react";
import TargetHotel from "./HotelTarget";
import { HotelsAPI } from "../utils/Api";
function FeaturedHotelList() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(function() {
        async function fetchData() {
            try {
                const response = await fetch(HotelsAPI);
                if (response.ok) {
                    const json = await response.json();
                    console.log(json.data);
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
                console.log(hotel.attributes.Featured);
                if(hotel.attributes.Featured) {
                return <TargetHotel 
                key={hotel.id} 
                id={hotel.id}
                imgurl={hotel.attributes.imgurl}
                Name={hotel.attributes.Name} 
                Price={hotel.attributes.Price} />;
                }
            })}
        </>
    );
}
export default FeaturedHotelList;
