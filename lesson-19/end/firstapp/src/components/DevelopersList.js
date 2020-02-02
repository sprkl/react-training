import React from "react";

import Developer from "./Developer";

class DevelopersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      count: nextProps.developers.length
    };
  }

  render() {
    const { developers } = this.props;

    return (
      <div>
        <h2>Développeurs : {this.state.count}</h2>
        <div className="developers-list">
          {developers.map(developer =>
            developer.age >= 25 ? (
              <Developer
                key={developer.id}
                name={developer.name}
                age={developer.age}
                expertise={developer.expertise}
                // deleteDevelper={this.props.deleteDeveloper}
                delete={() => this.props.deleteDeveloper(developer.id)}
              />
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default DevelopersList;
