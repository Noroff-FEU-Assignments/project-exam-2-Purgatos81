import { useState, useEffect } from "react";
import TargetContact from "./ContactTarget";
import { ContactAPI } from "../utils/Api";
function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(function() {
        async function fetchData() {
            try {
                const response = await fetch(ContactAPI);

                if (response.ok) {
                    const json = await response.json();
                    console.log(json.data);
                    setContacts(json.data);
                } else {
                    setError("An error occured");
                }
            } catch (error) {
                setError(error.toString());
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    if(loading) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>{error}</div>
    }
    return (
        <>
            {contacts.map(function (contact) {
                console.log(contact.attributes);
                return <TargetContact
                key={contact.id} 
                Name={contact.attributes.Name}
                Email={contact.attributes.Email}
                Message={contact.attributes.Message} />;
            })}
        </>
    );
}
export default ContactList;