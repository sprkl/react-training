import React from "react";

import DevelopersList from "./components/DevelopersList";

function App() {
  const developers = [
    { name: "Renaud", age: 30, expertise: "React", id : 1 },
    { name: "Adrien", age: 30, expertise: ".NET" , id : 2},
    { name: "Nathan", age: 22, expertise: "Cognitive Services" , id : 3}
  ];

  return (
    <div>
      <header>
        <h1>Ma première app React</h1>
      </header>
      <h2>Développeurs :</h2>

      <DevelopersList developers={developers} />
    </div>
  );
}

export default App;
