import HotelDetails from "../components/hotels/HotelDetails";
import {
    DetailsBody
} from "../components/styles/DetailsStyles";
import BookingForm from "../components/forms/BookingForm";
import axios from "axios";
import { BookingAPI } from "../components/utils/Api";

import { GetHotelNameContext } from "../components/context/HotelnameContext";
import { useState } from "react";

const Details = () => {
    const [bookedHotelName, setBookedHotelName] = useState("Test For Function");
    
    const sendBooking = async (formData) => {
        const options = {
            data: {
                Hotelname: formData.Hotelname,
                Name: formData.Name,
                Email: formData.Email,
                From: formData.From,
                To: formData.To,
            },
        };
        const responseData = await axios.post(BookingAPI, options);
        console.log(responseData);
    };

    return (
        <GetHotelNameContext.Provider value={{ bookedHotelName, setBookedHotelName}}>
            <DetailsBody>
                <HotelDetails />
                <BookingForm sendBooking={sendBooking}/>
            </DetailsBody>
        </GetHotelNameContext.Provider>
    );
};

export default Details;