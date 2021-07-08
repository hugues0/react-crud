import React, { Component } from "react";

class EditContact extends Component {
  constructor(props){
    super(props);
    const {id,name,email} = props.location.state.contact;
    this.state={
      id,
      name,
      email
    }
  }

  update = (e) =>{
      e.preventDefault();
      if(this.state.name === "" || this.state.email === "" ){
          alert("One or more fields empty");
          return
      }
      console.log(this.state);
      this.props.updateContactHandler(this.state)
      this.setState({name:"",email:""}) 
      this.props.history.push("/")

  }
  render() {
    return (
      <div className="ui main" style={{marginTop:"55px"}}>
        <h2>Update contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <button className="ui button blue">Update contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditContact;
