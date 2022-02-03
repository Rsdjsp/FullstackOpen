import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    let verification = persons.map((item) => item.name);
    if (verification.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const person = { name: newName };
      setPersons(persons.concat(person));
      setNewName("");
    }
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form>
          <div>
            name:{" "}
            <input
              type="text"
              className="text-input"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" onClick={addPerson}>
              add
            </button>
          </div>
        </form>
        <h2>Numbers</h2>
        <div className="persons">
          {persons.map((item) => {
            return <p key={item.name}>{item.name}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
