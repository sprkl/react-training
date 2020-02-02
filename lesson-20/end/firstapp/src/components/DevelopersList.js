import React from "react";

import Developer from "./Developer";

const DevelopersList = props => {
  const [count, setCount] = React.useState(0);

  React.useEffect(
    function updateCount() {
      setCount(props.developers.length);
    },
    [props.developers]
  );

  const { developers } = props;

  return (
    <div>
      <h2>Développeurs : {count}</h2>
      <div className="developers-list">
        {developers.map(developer => (
          <Developer
            key={developer.id}
            name={developer.name}
            age={developer.age}
            expertise={developer.expertise}
            // deleteDevelper={this.props.deleteDeveloper}
            delete={() => props.deleteDeveloper(developer.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DevelopersList;
