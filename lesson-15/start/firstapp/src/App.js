import React from "react";

import Header from "./components/Header";
import DevelopersList from "./components/DevelopersList";

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

  render() {
    return (
      <div>
        <header/>

        <DevelopersList developers={this.state.developers} />
      </div>
    );
  }
}

export default App;
