import React from "react";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles.js";

const Developer = props => {
  console.log(props);

  const { age, name, expertise } = props;

  const ageDisplay = age < 25 ? "Moins de 25 ans" : age;

  const { classes } = props;
 
  return (
    <div className={classes.developerItem}>
      <p style={{ fontWeight: "bold" }}>Name : {name}</p>
      <p>Age : {ageDisplay}</p>
      <p>Spécialité : {expertise}</p>
      <button onClick={props.delete}>Supprimer</button>
    </div>
  );
};

export default withStyles(styles)(Developer);
