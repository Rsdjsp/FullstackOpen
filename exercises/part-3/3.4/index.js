
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

app.get("/api/persons/:id", (req, res) => {
    const id = req.params.id;
    const person = persons.find(person => person.id === id);
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.delete("/:id", (req, res) => {
    const { id } = req.params
    const filterParams = persons.filter(person => person.id !== id)
    fs.writeFileSync("../persons.json", JSON.stringify(filterParams))
    res.status(200).json({ message: `person ${id} deleted` }).end()
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});