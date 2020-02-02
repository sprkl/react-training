import React from "react";

const Developer = props => {
  console.log(props);

  const { age, name, expertise } = props;

  const ageDisplay = age < 25 ? "Moins de 25 ans" : age;

  const developerItemStyle = {
    marginBottom: 6,
    paddingBottom: 12,
    borderBottom: "1px solid gray",
    borderWidth: age
  };

  return (
    <div style={developerItemStyle}>
      <p style={{ fontWeight: "bold" }}>Name : {name}</p>
      <p>Age : {ageDisplay}</p>
      <p>Spécialité : {expertise}</p>
      <button style={{ borderRadius: "50%" }} onClick={props.delete}>
        Supprimer
      </button>
    </div>
  );
};

export default Developer;
