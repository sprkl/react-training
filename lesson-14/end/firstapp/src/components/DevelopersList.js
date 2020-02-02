import React, { Component } from "react";

import Developer from "./Developer";

const DevelopersList = props => {
  const developers = props.developers.map(developer => {
    return (
      <Developer
        key={developer.id}
        name={developer.name}
        age={developer.age}
        expertise={developer.expertise}
      />
    );
  });

  return (
    <div>
      <h2>Développeurs :</h2>
      <div className="developers-list">{developers}</div>
    </div>
  );
};

export default DevelopersList;
