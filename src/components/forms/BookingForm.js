import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BookingSchema } from "../utils/yupSchemas";
import {
    BookingFormContainer,
    BookingHeadingContainer,
    BookingHeading,
    StyledBookingForm,
    StyledBookingLabel,
    StyledBookingAsterix,
    StyledBookingHotelInput,
    StyledBookingInput,
    StyledBookingButton
} from "../styles/BookingStyles";
import { GetHotelNameContext } from "../context/HotelnameContext";
const BookingForm = ({sendBooking}) => {
    const {bookedHotelName, setBookedHotelName} = useContext(GetHotelNameContext);
    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(BookingSchema),
    });
    const onSubmit = (formData) => {
        sendBooking(formData).catch(console.error);
        alert('Your booking has been sent!');
    };
    console.log(errors);
    return (
        <BookingFormContainer>
            <BookingHeadingContainer>
                <BookingHeading>Book it now!</BookingHeading>
            </BookingHeadingContainer>
            <StyledBookingForm>
                <StyledBookingLabel HTMLFor="Hotelname">Book your stay at:</StyledBookingLabel>
                <StyledBookingHotelInput {...register("Hotelname")} value={bookedHotelName}/>
                <StyledBookingLabel HTMLFor="bookingName">Your name<StyledBookingAsterix> *</StyledBookingAsterix></StyledBookingLabel>
                <StyledBookingInput id="bookingName" {...register("Name")} placeholder='Your name...'/>
                {errors.Name && <span>{errors.Name.message}</span>}
                <StyledBookingLabel HTMLFor="bookingEmail">Email<StyledBookingAsterix> *</StyledBookingAsterix></StyledBookingLabel>
                <StyledBookingInput id="bookingEmail" {...register("Email")} placeholder='Your email...'/>
                {errors.Email && <span>{errors.Email.message}</span>}
                <StyledBookingLabel HTMLFor="bookingFrom">From<StyledBookingAsterix> *</StyledBookingAsterix></StyledBookingLabel>
                <StyledBookingInput id="bookingFrom" {...register("From")} placeholder='MM.DD.YYYY'/>
                {errors.From && <span>{errors.From.message}</span>}
                <StyledBookingLabel HTMLFor="bookingTo">To<StyledBookingAsterix> *</StyledBookingAsterix></StyledBookingLabel>
                <StyledBookingInput id="bookingTo" {...register("To")} placeholder='MM.DD.YYYY'/>
                {errors.To && <span>{errors.To.message}</span>}
                <StyledBookingButton onClick={handleSubmit(onSubmit)}>Send</StyledBookingButton>
            </StyledBookingForm>
        </BookingFormContainer>
    );
}
export default BookingForm;