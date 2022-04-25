import { useState, useEffect } from "react";
import TargetSearchHotel from "./HotelSearchTarget";
import { HotelsAPI } from "../utils/Api";

function HotelSearchList() {
    const [hotels, setHotels] = useState([]);

    useEffect(function() {
        async function fetchData() {
                const response = await fetch(HotelsAPI);
                    const json = await response.json();
                    console.log(json.data);
                    setHotels(json.data);
        }
        fetchData();
    }, []);

    return (
        <>
            {hotels.map(function (hotel) {
                console.log(hotel);
                const { id, Name } = hotel
                return <TargetSearchHotel key={hotel.id} id={hotel.id} Name={hotel.attributes.Name} />;
            })}
        </>
    );
}

export default HotelSearchList;