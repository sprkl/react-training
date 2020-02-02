import React from "react";

import Header from "./components/Header";
import DevelopersList from "./components/DevelopersList";
import DeveloperForm from "./components/DeveloperForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      developers: [
        { name: "Renaud", age: 30, expertise: "React", id: 1 },
        { name: "Adrien", age: 30, expertise: ".NET", id: 2 },
        { name: "Nathan", age: 22, expertise: "Cognitive Services", id: 3 }
      ]
    };
  }

  addDeveloper = developer => {
    const oldDevelopers = this.state.developers;

    developer.id = oldDevelopers.length + 1;

    const newDevelopers = [...oldDevelopers, developer];

    this.setState({
      developers: newDevelopers
    });
  };

  render() {
    return (
      <div>
        <Header />

        <DeveloperForm addDeveloper={this.addDeveloper} />

        <DevelopersList developers={this.state.developers} />
      </div>
    );
  }
}

export default App;
