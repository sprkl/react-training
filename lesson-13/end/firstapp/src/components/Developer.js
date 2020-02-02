import React from "react";

export default class Developer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>Name : {this.props.name}</p>
        <p>Age : {this.props.age}</p>
        <p>Spécialité : {this.props.expertise}</p>
      </div>
    );
  }
}
