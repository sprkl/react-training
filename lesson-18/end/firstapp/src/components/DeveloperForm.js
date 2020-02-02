import React, { Component } from "react";

export default class DeveloperForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      expertise: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    const newDeveloper = {
      name: this.state.name,
      age: parseInt(this.state.age),
      expertise: this.state.expertise
    };

    this.props.addDeveloper(newDeveloper);
  };

  render() {
    const { name, age, expertise } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" value={name} onChange={this.handleChange} />

          <label htmlFor="age">Age : </label>
          <input type="text" id="age" value={age} onChange={this.handleChange} />

          <label htmlFor="expertise">Expertise : </label>
          <input type="text" id="expertise" value={expertise} onChange={this.handleChange} />

          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}
