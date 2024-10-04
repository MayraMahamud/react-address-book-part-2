import { useParams } from "react-router-dom";

function ContactDetail({ contacts }) {
    const { id } = useParams();
    const contact = contacts.find(contact => contact.id === parseInt(id));


    return (
        <div>
            <h2>Contact Details</h2>
            <p><strong>Name:</strong>
            {contact.firstName} {contact.lastName}</p>
            <p><strong>Street:</strong>
            {contact.street}</p>
            <p><strong>City:</strong>
            {contact.city}</p>
        </div>
    );
}
export default ContactDetail;