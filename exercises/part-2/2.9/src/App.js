import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    let verification = persons.map((item) => item.name);
    if (verification.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if (!newNumber || !newName) {
      alert(`Please complete the form`);
    } else {
      const person = { name: newName, number: newNumber };
      setPersons(persons.concat(person));
      setNewName("");
      setNewNumber("");
    }
  };

  const itemList = () => {
    let textList = persons.filter(
      (person) =>
        person.name.toLowerCase().includes(filter.toLowerCase()) === true
    );

    let list = textList.map((item) => {
      return (
        <p key={item.name}>
          {item.name} <span>{item.number}</span>
        </p>
      );
    });

    return list;
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <div className="input-container">
          Filter by name: {""}
          <input
            type="text"
            className="filter.input"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <h2>add a new</h2>
        <form>
          <div className="input-container">
            name:{" "}
            <input
              type="text"
              className="text-input"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="input-container">
            number:{" "}
            <input
              type="text"
              className="number-input"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" onClick={addPerson}>
              add
            </button>
          </div>
        </form>
        <h2>Numbers</h2>
        <div className="persons">{itemList()}</div>
      </div>
    </>
  );
};

export default App;
