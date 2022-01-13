import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";

function App() {
  const [newCountry, setNewCountry] = useState([]);
  const [filter, setFilter] = useState("");
  


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setNewCountry(response.data);
    });
  }, []);

 

 
 


  return (
    <>
      <div className="form container">
        Find Countires: {""}
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="country-container">
        <ItemList newCountry={newCountry} filter={filter}  />
      </div>
    </>
  );
}

export default App;
