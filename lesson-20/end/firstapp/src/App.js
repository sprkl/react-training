import React from "react";

import Header from "./components/Header";
import DevelopersList from "./components/DevelopersList";
import DeveloperForm from "./components/DeveloperForm";

const App = () => {
  const [developers, setDevelopers] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(function fetchData() {
    console.log("fetchData", new Date());
    setLoading(true);

    const data = localStorage.getItem("data");

    setTimeout(() => {
      const developers = data ? JSON.parse(data) : [];

      setDevelopers(developers);
      setLoading(false);
    }, 3000);
  }, []);

  React.useEffect(
    function persistDevelopers() {
      localStorage.setItem("data", JSON.stringify(developers));
    },
    [developers]
  );

  const addDeveloper = developer => {
    const oldDevelopers = developers;

    developer.id = Math.random();

    const newDevelopers = [...oldDevelopers, developer];

    setDevelopers(newDevelopers);
  };

  const deleteDeveloper = id => {
    const updatedDevelopers = developers.filter(developer => {
      return developer.id !== id;
    });

    setDevelopers(updatedDevelopers);
  };

  return (
    <div>
      <Header />

      <DeveloperForm addDeveloper={addDeveloper} />

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <DevelopersList developers={developers} deleteDeveloper={deleteDeveloper} />
      )}
    </div>
  );
};

export default App;
