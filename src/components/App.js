
import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList'


const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState([]);  
  const addContactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts,contact]);
  }

  useEffect(() => {
   const retreivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retreivedContacts) setcontacts(retreivedContacts)
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  return ( 
   <div className="ui container">
     <Header/>
     <AddContact addContactHandler={addContactHandler}/>
     <ContactList contacts={contacts}/>
   </div>
  );
}

export default App;
