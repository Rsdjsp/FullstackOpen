import React from "react";

function PersonForm({
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  addPerson,
}) {
  return (
    <>
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
    </>
  );
}

export default PersonForm;
