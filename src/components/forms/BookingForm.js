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
    StyledBookingInput,
    StyledBookingTextarea,
    StyledBookingButton
} from "../styles/BookingStyles";

const BookingForm = ({sendBooking}) => {
    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(BookingSchema),
    });

    const onSubmit = (formData) => {
        console.log('Form Data: ', formData);

        sendBooking(formData).catch(console.error);
        alert('Your booking has been sent!');
    };

    console.log(errors);

    return (
        <BookingFormContainer>
            <BookingHeadingContainer>
                <BookingHeading>Book it now!</BookingHeading>
            </BookingHeadingContainer>

            <StyledBookingForm onSubmit={handleSubmit(onSubmit)}>
                <StyledBookingLabel HTMLFor="bookingName">Your name<StyledBookingAsterix> *</StyledBookingAsterix></StyledBookingLabel>
                <StyledBookingInput id="bookingName" {...register("Name")} placeholder='Your name...'/>
                {errors.Name && <span>{errors.Name.message}</span>}

                <StyledBookingLabel HTMLFor="bookingEmail">Email<StyledBookingAsterix> *</StyledBookingAsterix></StyledBookingLabel>
                <StyledBookingInput id="bookingEmail" {...register("Email")} placeholder='Your email...'/>
                {errors.Email && <span>{errors.Email.message}</span>}

                <StyledBookingLabel HTMLFor="bookingDate">Date<StyledBookingAsterix> *</StyledBookingAsterix></StyledBookingLabel>
                <StyledBookingInput id="bookingDate" {...register("Date")} placeholder='DD.MM.YYYY'/>
                {errors.Date && <span>{errors.Date.message}</span>}

                <StyledBookingButton>Send</StyledBookingButton>
            </StyledBookingForm>

        </BookingFormContainer>
    );
}

export default BookingForm;