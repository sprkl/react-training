import React from "react";

const Developer = props => {
  console.log(props);

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Spécialité : {props.expertise}</p>
    </div>
  );
};

export default Developer;
