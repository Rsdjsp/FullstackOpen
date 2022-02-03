const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const app = express();




app.use(cors())
app.use(express.json());
morgan.token("body", function (req, res) {
  const body = JSON.stringify(req.body);
  return body;
});
app.use(
  morgan(`:method :status :url :res[content-length] - :response-time ms :body `)
);

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/", (request, response) => {
  return response.end("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  const answer = morgan("combined", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  });
  return response.status(200).json(persons);
});

app.get("/info", (request, response) => {
  const date = new Date();
  return response.send(
    `<h1>Phonebook has info for ${persons.length} persons</h1> \n ${date} `
  );
});

app.get("/api/persons/:id", (request, response) => {
  const { id } = request.params;
  const personFind = persons.find((person) => person.id === parseInt(id));
  if (personFind === undefined) {
    return response.status(400).json({
      error: "content missing",
    });
  } else {
    return response.send(personFind);
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const { id } = request.params;
  persons = persons.filter((person) => person.id !== parseInt(id));
  return response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const generateId = () => {
    const maxId =
      persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
    return maxId + 1;
  };
  const newPerson = request.body;

  const person = {
    name: newPerson.name,
    number: newPerson.number,
    id: generateId(),
  };

  const currentName = persons.map((per) => per.name);

  if (currentName.includes(person.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  } else if (person.name === "" || person.number === "") {
    return response.status(400).json({
      error: "number or name is empty",
    });
  } else {
    persons = persons.concat(person);
    return response.status(200).json(persons);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});

module.exports = app;
