import React from "react";

import Header from "./components/Header";
import DevelopersList from "./components/DevelopersList";
import DeveloperForm from "./components/DeveloperForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      developers: [],
      loading: true
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    // call some web API
    const data = localStorage.getItem("data");

    setTimeout(() => {
      const developers = data ? JSON.parse(data) : [];

      this.setState({
        developers,
        loading: false
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    localStorage.setItem("data", JSON.stringify(this.state.developers));
  }

  addDeveloper = developer => {
    const oldDevelopers = this.state.developers;

    developer.id = oldDevelopers.length + 1;

    const newDevelopers = [...oldDevelopers, developer];

    this.setState({
      developers: newDevelopers
    });
  };

  deleteDeveloper = id => {
    const updatedDevelopers = this.state.developers.filter(developer => {
      return developer.id !== id;
    });

    this.setState({
      developers: updatedDevelopers
    });
  };

  render() {
    return (
      <div>
        <Header />

        <DeveloperForm addDeveloper={this.addDeveloper} />

        {this.state.loading ? (
          <p>Chargement...</p>
        ) : (
          <DevelopersList
            developers={this.state.developers}
            deleteDeveloper={this.deleteDeveloper}
          />
        )}
      </div>
    );
  }
}

export default App;
