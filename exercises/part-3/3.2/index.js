
import express from "express"
import cors from "cors";
import fs from "fs";

const data = fs.readFileSync("../persons.json", "utf-8");
const persons = JSON.parse(data);

const app = express()
const PORT = 3001

app.use(express.json());
app.use(cors("*"))

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

app.get("/info", (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});