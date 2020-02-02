import React from "react";

import Developer from "./DeveloperMaterialUIStyle";

const DevelopersList = props => {
  const { developers } = props;

  return (
    <div>
      <h2>Développeurs :</h2>
      <div className="developers-list">
        {developers.map(developer =>
          developer.age >= 25 ? (
            <Developer
              key={developer.id}
              name={developer.name}
              age={developer.age}
              expertise={developer.expertise}
              delete={() => props.deleteDeveloper(developer.id)}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default DevelopersList;
