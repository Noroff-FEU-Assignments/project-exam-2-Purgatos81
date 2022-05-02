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

const AddHotelForm = ({addHotel}) => {
    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(AddHotelSchema),
    });

    const onSubmit = (FormData) => {
        console.log('Form Data: ', FormData);

        addHotel(FormData).catch(console.error);
        alert('Hotel added');
    };

    console.log(errors);

    return (
        <AddHotelFormContainer>
            <AddHotelHeadingContainer>
                <AddHotelHeading>Add Hotel</AddHotelHeading>
            </AddHotelHeadingContainer>
            <StyledAddHotelForm>
                
            </StyledAddHotelForm>
        </AddHotelFormContainer>
    );
}

export default AddHotelForm;