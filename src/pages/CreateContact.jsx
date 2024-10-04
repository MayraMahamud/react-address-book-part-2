import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact({ addContact }) {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[street, setStreet] = useState('');
    const[city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = { firstName, lastName, street, city };

        fetch('https://boolean-uk-api-server.fly.dev/MayraMahamud/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newContact)
        }) 
        .then(response => response.json()).then(data => {
            addContact(data);
            navigate('/');
        })
        };


        return (
            <div>
                <h2>Create a contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    placeholder="Firstname" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    />
                  
                   <input type="text" 
                    placeholder="Lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    />
                  
                    <input type="text" 
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                    />
                  
                    <input type="text" 
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    />
                    <button type= "submit">Create Contact</button>

                </form>

            </div>
        );
    
}
export default CreateContact;