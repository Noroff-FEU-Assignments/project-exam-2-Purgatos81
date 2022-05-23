import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddHotelSchema } from "../utils/yupSchemas";
import { 
    AddHotelFormContainer,
    AddHotelHeadingContainer,
    AddHotelHeading,
    StyledAddHotelForm,
    StyledAddHotelFormLabel,
    StyledAddHotelFormInput,
    StyledAddHotelFormTextarea,
    StyledAddHotelFormButton
 } from "../styles/AdminStyles";
const AddHotelForm = ({sendNewHotel}) => {
    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(AddHotelSchema),
    });
    const onSubmit = (FormData) => {
        console.log('Form Data: ', FormData);

        sendNewHotel(FormData).catch(console.error);
        alert('Hotel added');
    };
    console.log(errors);
    return (
        <AddHotelFormContainer>
            <AddHotelHeadingContainer>
                <AddHotelHeading>Add Hotel</AddHotelHeading>
            </AddHotelHeadingContainer>
            <StyledAddHotelForm onSubmit={handleSubmit(onSubmit)}>
                <StyledAddHotelFormLabel HTMLFor="hotelName">Name of Hotel</StyledAddHotelFormLabel>
                <StyledAddHotelFormInput id="hotelName" {...register("Name")} placeholder='Name of Hotel...'/>
                {errors.Name && <span>{errors.Name.message}</span>}

                <StyledAddHotelFormLabel HTMLFor="hotelDescription">Description of Hotel</StyledAddHotelFormLabel>
                <StyledAddHotelFormInput id="hotelDescription" {...register("Description")} placeholder='Description of Hotel...'/>
                {errors.Description && <span>{errors.Description.message}</span>}

                <StyledAddHotelFormLabel HTMLFor="hotelInformation">Information on Hotel</StyledAddHotelFormLabel>
                <StyledAddHotelFormTextarea id="hotelInformation" {...register("Information")} placeholder='Information on Hotel...'/>
                {errors.Information && <span>{errors.Information.message}</span>}

                <StyledAddHotelFormLabel HTMLFor="hotelPrice">Price of Hotel</StyledAddHotelFormLabel>
                <StyledAddHotelFormInput id="hotelPrice" {...register("Price")} placeholder='Price of Hotel...'/>
                {errors.Price && <span>{errors.Price.message}</span>}

                <StyledAddHotelFormLabel HTMLFor="hotelimgurl">Image URL of Hotel</StyledAddHotelFormLabel>
                <StyledAddHotelFormInput id="hotelimgurl" {...register("imgurl")} placeholder='Image URL...'/>
                {errors.imgurl && <span>{errors.imgurl.message}</span>}

                <StyledAddHotelFormButton>Create</StyledAddHotelFormButton>
            </StyledAddHotelForm>
        </AddHotelFormContainer>
    );
}
export default AddHotelForm;