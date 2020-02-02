import React from "react";

import styled from "styled-components";

const Developer = props => {
  console.log(props);

  const { age, name, expertise } = props;

  const ageDisplay = age < 25 ? "Moins de 25 ans" : age;

  return (
    <DeveloperItem color={"red"} className="developer-item">
      <BoldText>Name : {name}</BoldText>
      <p>Age : {ageDisplay}</p>
      <p>Spécialité : {expertise}</p>
      <button onClick={props.delete}>Supprimer</button>
    </DeveloperItem>
  );
};

const DeveloperItem = styled.div`
  padding-bottom: 12px;
  margin-bottom: 6px;
  border-bottom: 1px solid ${props => props.color};
`;

const BoldText = styled.p`
  font-weight: bold;
`;

export default Developer;
