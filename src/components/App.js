import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import contactDetails from "./contactDetails";
import api from '../api/contacts';
import EditContact from "./EditContact";

const App = () => {
  /* const LOCAL_STORAGE_KEY = "contacts"; */
  const [contacts, setcontacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setsearchResults] = useState([])

  const retrieveContacts = async() => {
    const response = await api.get("/contacts");
    return response.data
  }
  

  const addContactHandler = async (contact) => {
    
    const request ={id:uuid(),...contact}
    const response = await api.post("/contacts",request)
    console.log(contact);
    setcontacts([...contacts,response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`,contact)
    const {id,name,email} = response
    setcontacts(contacts.map((contact) =>{
      return contact.id === id ? {...response.data} : contact;
    })
    )
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setcontacts(newContactList);
  };

  const searchHandler = (searchTerm) =>{
    setSearchTerm(searchTerm)
    if (searchTerm !== ""){
      const newContactList = contacts.filter((contact) =>{
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setsearchResults(newContactList)
    }else{
      setsearchResults(contacts)
    }

  }

  useEffect(() => {
    const getAllContacts = async () => {
      const getAll = await retrieveContacts();
      if (getAll) setcontacts(getAll);
    };

    getAllContacts();
  }, []);

  

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            exact
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path="/edit"
            exact
            render={(props) => (
              <EditContact {...props} updateContactHandler={updateContactHandler} />
            )}
          />
          <Route path="/contact/:id" component={contactDetails} />
        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
};

export default App;
