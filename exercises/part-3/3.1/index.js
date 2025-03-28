
import express from "express"

import fs from "fs";

const data = fs.readFileSync("../persons.json", "utf-8");
const persons = JSON.parse(data);

const app = express()
const PORT = 3001

app.use(express.json());

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});