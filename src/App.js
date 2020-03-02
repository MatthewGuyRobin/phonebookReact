import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      number: "",
      phoneBook: [
        { name: "", number: "" },
        { name: "", number: "" }
      ],
      showForm: false
    }

    this.nameHandler = (event) => {
      this.setState({
        name: event.target.value
      })
    }

    this.numberHandler = (event) => {
      this.setState({
        number: event.target.value
      })
    }

    this.addContact = () => {

      const newContact = {
        name: this.state.name,
        number: this.state.number
      }



      this.setState((prevState) => ({
        phoneBook: prevState.phoneBook.concat(newContact),
        name: "",
        number: ""
      }))

    }

    this.toggleShowForm = () => {
      this.setState(
        { showForm: !this.state.showForm }
      )
    }
  }

  render() {

    let form = null;
    if (this.state.showForm) {
      form =
        (
          <div className="container">
            <form className="form">

              <input type="text" onChange={this.nameHandler} value={this.state.name} placeHolder="Name" />


              <input type="text" onChange={this.numberHandler} value={this.state.number} placeHolder="Number" />

              <button type="button" className="addBtn" onClick={this.addContact}>Add</button>

            </form>
          </div>
        )
    }

    return (
      <div className="container-fluid">
        <div className="row">

          <div className="App">
            <h2 className="header">PhoneBook</h2>

            <button onClick={this.toggleShowForm}>Create New Contact</button>

            {form}

            {this.state.phoneBook.map(contact =>
              <div>
                <p className="nameinput">{contact.name}</p>
                <p className="numberinput">{contact.number}</p>
              </div>
            )}

          </div>
        </div>
      </div>


    );
  }
}

export default App;