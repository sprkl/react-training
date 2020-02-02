import React, { Component } from "react";

import Developer from "./Developer";

class DevelopersList extends Component {
  render() {
    const developers = this.props.developers.map((developer) => {
      return (
        <Developer
          key={developer.id}
          name={developer.name}
          age={developer.age}
          expertise={developer.expertise}
        />
      );
    });

    return <div className="developers-list">{developers}</div>;
  }
}

export default DevelopersList;
