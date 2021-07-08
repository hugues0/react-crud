import React from 'react';
import {Link} from 'react-router-dom'
import user from '../images/user.png';;

const ContactCard = (props) =>{
    const {id,name,email} = props.contact;
    return (
      <div className="item" style={{ marginTop: "0px" }}>
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          onClick={() => props.clickHandler(id)}
          className="trash alternate outine icon"
          style={{
            float: "right",
            marginBottom: "10px",
            color: "red",
            marginTop: "10px",
          }}
        ></i>
        <Link
          to={{
            pathname: `/edit`,
            state: { contact: props.contact },
          }}
        >
          <i
            /* onClick={() => props.clickHandler(id)} */
            className="edit alternate outine icon"
            style={{
              float: "right",
              marginBottom: "10px",
              marginRight: "10px",
              color: "#85C1E9",
              marginTop: "10px",
            }}
          ></i>
        </Link>
      </div>
    );
}

export default ContactCard