import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Dashboard from "./pages/Dashboard";
import CreateContact from "./pages/CreateContact";
import ContactDetail from "./pages/ContactDetail";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const url = "https://boolean-uk-api-server.fly.dev/MayraMahamud/contact";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setContacts(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <nav className="menu">
        <h2>Menu</h2>
        <Link to="/">Contacts List</Link>
        <br />
        <Link to="/create">Add new contact</Link>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard contacts={contacts} />} />

          <Route
            path="/contact/:id"
            element={<ContactDetail contacts={contacts} />}
          />

          <Route
            path="/create"
            element={
              <CreateContact contacts={contacts} setContacts={setContacts} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

//from line 35 - addContact={addContact}
