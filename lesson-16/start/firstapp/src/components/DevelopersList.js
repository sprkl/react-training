import React from "react";

import Developer from "./Developer";

const DevelopersList = props => {
  const { developers } = props;

  // const oldDevelopers = developers.map(developer => {
  //   if (developer.age >= 25) {
  //     return (
  //       <Developer
  //         key={developer.id}
  //         name={developer.name}
  //         age={developer.age}
  //         expertise={developer.expertise}
  //       />
  //     );
  //   } else {
  //     return null;
  //   }
  // });

  // const oldDevelopers = developers.map(developer =>
  //   developer.age >= 25 ? (
  //     <Developer
  //       key={developer.id}
  //       name={developer.name}
  //       age={developer.age}
  //       expertise={developer.expertise}
  //     />
  //   ) : null
  // );

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
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default DevelopersList;
