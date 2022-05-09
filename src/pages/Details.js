import HotelDetails from "../components/hotels/HotelDetails";
import {
    DetailsBody
} from "../components/styles/DetailsStyles";
import BookingForm from "../components/forms/BookingForm";
import axios from "axios";
import { BookingAPI } from "../components/utils/Api";


const Details = () => {
    const sendBooking = async (formData) => {
        const options = {
            data: {
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
        <DetailsBody>
            <HotelDetails />
            <BookingForm sendBooking={sendBooking}/>
        </DetailsBody>
    );
};

export default Details;