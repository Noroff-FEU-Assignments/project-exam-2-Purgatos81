import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required("Please enter yout name"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter yout message").min(10, "The message must be at least 10 characters long"),
});

function ContactForm() {
    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}

            <input {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <textarea {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}

            <button>Send</button>
        </form>
    );
}

export default ContactForm;