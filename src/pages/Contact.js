import ContactForm from "../components/forms/ContactForm";
import axios from "axios";
import { ContactAPI } from "../components/utils/Api";
const Contact = () => {
    const sendContact = async (formData) => {
        const options = { 
            data: {
                Name: formData.Name,
                Email: formData.Email,
                Message: formData.Message,
            },
        };
        const responseData = await axios.post(ContactAPI, options);
        console.log(responseData);
    };
    return (
        <ContactForm sendContact={sendContact} />
    );
};
export default Contact;