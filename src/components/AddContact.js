import React,{Component} from 'react'

class AddContact extends Component{
    render(){
        return (
          <div className="ui main">
            <h2>Add contact</h2>
            <form className="ui form">
              <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter name" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Enter email" />
              </div>
              <div>
                  <button className="ui button blue">Add contact</button>
              </div>
            </form>
          </div>
        );
    }
}

export default AddContact;