import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Server from "./Server";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    Server.getData().then((response) => {
      setPersons(response);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    let verification = persons.map((item) => item.name);

    if (verification.includes(newName)) {
      let verification = persons.map((item) => item.number);
      if (verification.includes(newNumber)) {
        alert(`${newName} is on your phonebook`);
      } else {
        let confirm = window.confirm(
          `${newName} is already added to phonebook, \nDo you want remplace this number for ${newNumber}? `
        );
        if (confirm) {
          let index = persons.find((person) => person.name === newName);
          let idFinder = persons.indexOf(index) + 1;
          const person = { name: newName, number: newNumber };
          Server.updateData(idFinder, person);
          window.location.reload();
        }
      }
    } else if (!newNumber || !newName) {
      alert(`Please complete the form`);
    } else {
      const person = { name: newName, number: newNumber };
      Server.createData(person);
      setPersons(persons.concat(person));
      setNewName("");
      setNewNumber("");
      window.location.reload();
    }
  };

  const deletePerson = (item) => {
    let confirm = window.confirm(`Are you sure to delete ${item.name}?`);
    if (confirm) {
      Server.deleteData(item.id);
      window.location.reload();
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
          {item.name} <span>{item.number} </span>
          <button onClick={() => deletePerson(item)}> Delete</button>
        </p>
      );
    });

    return list;
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <div className="filter-container">
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="form-container">
          <h2>add a new</h2>
          <PersonForm
            newName={newName}
            newNumber={newNumber}
            setNewName={setNewName}
            setNewNumber={setNewNumber}
            addPerson={addPerson}
          />
        </div>
        <h2>Numbers</h2>
        <div className="persons">
          <Persons itemList={itemList} />
        </div>
      </div>
    </>
  );
};

export default App;
