import React from "react";

const Developer = props => {

  const { age, name, expertise } = props;

  const ageDisplay = age < 25 ? "Moins de 25 ans" : age;

  React.useEffect(function didMount() {
    console.log("Developer Did mount!");
    return function willUnmount() {
      console.log("Developer will unmount");
    };
  }, []);

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Name : {name}</p>
      <p>Age : {ageDisplay}</p>
      <p>Spécialité : {expertise}</p>
      <button onClick={props.delete}>Supprimer</button>
    </div>
  );
};

export default Developer;
