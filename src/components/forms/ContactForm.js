import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from  "../utils/yupSchemas";
import { 
    ContactFormPageContainer, 
    StyledContactForm, 
    HeadingContainer, 
    ContactHeading,
    StyledInput,
    StyledTextarea,
    StyledContactButton,
    StyledContactLabel,
    StyledAsterix } from "../styles/ContactStyles";
const ContactForm = ({sendContact}) => {
    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ContactSchema),
    });
    const onSubmit = (formData) => {
        console.log('Form Data: ', formData);
        sendContact(formData).catch(console.error);
        alert('Your message has been sent!');
    };
    console.log(errors);
    return (
        <ContactFormPageContainer>
            <HeadingContainer>
                <ContactHeading>Contact Us</ContactHeading>
            </HeadingContainer>
            <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
                <StyledContactLabel HTMLFor="contactName">Name<StyledAsterix> *</StyledAsterix></StyledContactLabel>
                <StyledInput id="contactName" {...register("Name")} placeholder='Your name...'/>
                {errors.Name && <span>{errors.Name.message}</span>}
                <StyledContactLabel HTMLFor="contactEmail">Email<StyledAsterix> *</StyledAsterix></StyledContactLabel>
                <StyledInput id="contactEmail" {...register("Email")} placeholder='Your email...'/>
                {errors.Email && <span>{errors.Email.message}</span>}
                <StyledContactLabel HTMLFor="contactMessage">Message<StyledAsterix> *</StyledAsterix></StyledContactLabel>
                <StyledTextarea id="contactMessage"{...register("Message")} placeholder='Your message...'/>
                {errors.Message && <span>{errors.Message.message}</span>}
                <StyledContactButton>Send</StyledContactButton>
            </StyledContactForm>
        </ContactFormPageContainer>
    );
}
export default ContactForm;