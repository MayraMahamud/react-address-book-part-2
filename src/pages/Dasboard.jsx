import { Link } from "react-router-dom";

function Dashboard ({ contacts }) {


    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(contact => ( 
                    <li key={contacts.id}>
                        <span>{contact.firstName} {contact.lastName}</span>
                        <Link to ={`/contact/${contact.id}`}>View</Link>
                        </li>
                ))}
            </ul>
        </div>



        
    );
}
export default Dashboard;