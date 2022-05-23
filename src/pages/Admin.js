import AuthContext from "../components/context/AuthContext";
import { useContext, useEffect } from "react";
import LoginForm from "../components/forms/LoginForm";
import AddHotelForm from "../components/forms/AddHotelForm";
import axios from "axios";
import { HotelsAPI } from "../components/utils/Api";
import ContactList from "../components/contact/ContactList";
import BookingList from "../components/bookings/BookingList";
import { 
    StyledBookingAndMessagesContainer,
    StyledBookingAndMessagesHeadingContainer,
    StyledBookingAndMessagesHeading,
    StyledBookingContainer,
    StyledMessagesContainer
} from "../components/styles/AdminStyles";
const Admin = () => {
    const [auth] = useContext(AuthContext);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const sendNewHotel = async (formData) => {
        const options = {
            data: {
                Name: formData.Name,
                Description: formData.Description,
                Price: formData.Price,
                Information: formData.Information,
                imgurl: formData.imgurl,
            },
        };
        const responseData = await axios.post(HotelsAPI, options);
        console.log(responseData);
    };
    if(auth === null) {
        return (
            <>
                <LoginForm/>
            </>
        );
    } else {
    return (
        <>
            <StyledBookingAndMessagesContainer>
                <StyledBookingContainer>
                    <StyledBookingAndMessagesHeadingContainer>
                        <StyledBookingAndMessagesHeading>Bookings</StyledBookingAndMessagesHeading>
                    </StyledBookingAndMessagesHeadingContainer>
                    <BookingList />
                </StyledBookingContainer>
                <StyledMessagesContainer>
                    <StyledBookingAndMessagesHeadingContainer>
                        <StyledBookingAndMessagesHeading>Messages</StyledBookingAndMessagesHeading>
                    </StyledBookingAndMessagesHeadingContainer>
                    <ContactList />
                </StyledMessagesContainer>
            </StyledBookingAndMessagesContainer>    
            <AddHotelForm sendNewHotel={sendNewHotel} />
        </>
    );
    }
};
export default Admin;