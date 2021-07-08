import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = (props) => {
    const {name,email} = props.location.state.contact;
  
  return (
    <div className="main" style={{ marginTop: "70px" }}>
      <div className="ui card centered" style={{ padding: "20px"}}>
        <div className="image" style={{backgroundColor:"white"}}>
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="div-center" style={{textAlign:"center"}}>
        <Link to="/">
          <button className="ui button green">
            Back to contact list
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
