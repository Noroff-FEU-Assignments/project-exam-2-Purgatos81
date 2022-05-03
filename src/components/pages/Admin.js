import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import LoginForm from "../forms/LoginForm";
import AddHotelForm from "../forms/AddHotelForm";
import axios from "axios";
import { HotelsAPI } from "../utils/Api";
import ContactList from "../contact/ContactList";


const Admin = () => {
    const [auth, setAuth] = useContext(AuthContext);
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
            <AddHotelForm sendNewHotel={sendNewHotel} />
            <ContactList />
        </>
    );
    }
};

export default Admin;