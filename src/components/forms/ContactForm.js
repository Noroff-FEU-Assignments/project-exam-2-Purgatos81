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

function ContactForm() {
    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ContactSchema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <ContactFormPageContainer>
            <HeadingContainer>
                <ContactHeading>Contact Us</ContactHeading>
            </HeadingContainer>

            <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
                <StyledContactLabel HTMLFor="contactName">Name<StyledAsterix> *</StyledAsterix></StyledContactLabel>
                <StyledInput id="contactName" {...register("name")} placeholder='Your name...'/>
                {errors.name && <span>{errors.name.message}</span>}

                <StyledContactLabel HTMLFor="contacEmail">Email<StyledAsterix> *</StyledAsterix></StyledContactLabel>
                <StyledInput id="contacEmail" {...register("email")} placeholder='Your email...'/>
                {errors.email && <span>{errors.email.message}</span>}

                <StyledContactLabel HTMLFor="contacMessage">Message<StyledAsterix> *</StyledAsterix></StyledContactLabel>
                <StyledTextarea id="contacMessage"{...register("message")} placeholder='Your message...'/>
                {errors.message && <span>{errors.message.message}</span>}

                <StyledContactButton>Send</StyledContactButton>
            </StyledContactForm>

        </ContactFormPageContainer>
    );
}

export default ContactForm;