import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Server from "./Server";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [alert, setAlert] = useState({ msg: "none", type: "none" });

  useEffect(() => {
    Server.getData().then((response) => {
      setPersons(response).catch((error) => {
        setAlert({ msg: error, type: "danger" });
      });
    });
  }, []);

  useEffect(() => {
    Server.getData().then((response) => {
      setPersons(response).catch((error) => {
        setAlert({ msg: error, type: "danger" });
      });
    });
  }, [alert]);

  const addPerson = (e) => {
    e.preventDefault();
    let verification = persons.map((item) => item.name);

    if (verification.includes(newName)) {
      let verification = persons.map((item) => item.number);
      if (verification.includes(newNumber)) {
        setAlert({ msg: `${newName} is on your phonebook`, type: "danger" });
        removeAlert();
      } else {
        let confirm = window.confirm(
          `${newName} is already added to phonebook, \nDo you want remplace this number for ${newNumber}? `
        );
        if (confirm) {
          let index = persons.find((person) => person.name === newName);
          let idFinder = persons.indexOf(index) + 1;
          const person = { name: newName, number: newNumber };
          Server.updateData(idFinder, person).catch((error) => {
            setAlert({ msg: error, type: "danger" });
          });
          setNewName("");
          setNewNumber("");
          setAlert({ msg: `${newName} changed succesfull`, type: "succes" });
          removeAlert();
        }
      }
    } else if (!newNumber || !newName) {
      setAlert({ msg: "Please complete the form", type: "danger" });
      removeAlert();
    } else {
      const person = { name: newName, number: newNumber };
      Server.createData(person).catch((error) => {
        setAlert({ msg: error, type: "danger" });
      });
      setPersons(persons.concat(person));
      setAlert({ msg: `${newName} added succesfull`, type: "succes" });
      setNewName("");
      setNewNumber("");
      removeAlert();
    }
  };

  const deletePerson = (item) => {
    let confirm = window.confirm(`Are you sure to delete ${item.name}?`);
    if (confirm) {
      setAlert({ msg: `${item.name} deleted`, type: "danger" });
      Server.deleteData(item.id).catch((error) => {
        setAlert({ msg: error, type: "danger" });
      });
      removeAlert();
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

  const removeAlert = () => {
    setTimeout(() => {
      setAlert({ msg: "", type: "none" });
    }, 2500);
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <div className="alert-component">
          <Alert alert={alert} setAlert={setAlert} />
        </div>
        <div className="filter-container">
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="form-container">
          <h2>Add a new</h2>
          <PersonForm
            newName={newName}
            newNumber={newNumber}
            setNewName={setNewName}
            setNewNumber={setNewNumber}
            addPerson={addPerson}
            removeAlert={removeAlert}
          />
        </div>
        <h2>Numbers</h2>
        <div className="persons">
          <Persons itemList={itemList} removeAlert={removeAlert} />
        </div>
      </div>
    </>
  );
};

export default App;
