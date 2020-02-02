import React from "react";

import "./style.css";

const Developer = props => {
  console.log(props);

  const { age, name, expertise } = props;

  const ageDisplay = age < 25 ? "Moins de 25 ans" : age;

  return (
    <div className="developer-item">
      <p style={{ fontWeight: "bold" }}>Name : {name}</p>
      <p>Age : {ageDisplay}</p>
      <p>Spécialité : {expertise}</p>
      <button onClick={props.delete}>Supprimer</button>
    </div>
  );
};

export default Developer;
