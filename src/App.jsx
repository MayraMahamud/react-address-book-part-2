import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Dashboard from "./pages/Dasboard";
import CreateContact from "./pages/CreateContact";
import ContactDetail from "./pages/ContactDetail";
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);


    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/MayraMahamud/contact")
          .then((res) => res.json())
          .then((data) => setContacts(data.results));
      }, []);

      const addContact =(contact) => {
        setContacts([...contacts, contact]);
      };
console.log(contacts)



    return (
  
            <div className="app-container">
                <nav className="menu">
                    <h2>Menu</h2>
                    <Link to ="/">Contacts List</Link><br />
                    <Link to ="/create">Add new contact</Link>
                </nav>
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard contacts={contacts}/>} />
                        <Route path="/conatct/:id" element={<ContactDetail contacts={contacts}/>}/>
                        <Route path="/create" element={<CreateContact addContact={addContact}/>}/>
                    </Routes>
                </main>
            </div>
       
        
       
    );
}

export default App;
