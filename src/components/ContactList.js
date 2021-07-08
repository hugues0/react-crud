import React, { useRef } from "react";
import { uuid } from "uuidv4";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const inputEl = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} />
    );
  });
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)


  };
  return (
    <div className="main" style={{ marginTop: "60px" }}>
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right" style={{ float: "right" }}>
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui search" style={{ textAlign: "center" }}>
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
