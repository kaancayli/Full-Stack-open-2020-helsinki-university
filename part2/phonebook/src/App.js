import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import phoneBookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    phoneBookService.getAll().then((returnedPerson) => {
      console.log("Response received");
      console.log(returnedPerson);
      setPersons(returnedPerson);
    });
  }, []);

  const addEntry = (event) => {
    event.preventDefault();
    const newPerson = { name: `${newName}`, number: `${newNumber}` };
    if (persons.some((e) => e.name === `${newName}`)) {
      const confirmed = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with the new one?`
      );
      if (confirmed) {
        const person = persons.find((p) => p.name === newName);
        const id = person.id;
        phoneBookService
          .update(id, newPerson)
          .then((returnedPerson) => {
            setPersons(persons.map((p) => (p.id !== id ? p : returnedPerson)));
            setNewName("");
            setNewNumber("");
            setStatus("success");
            setMessage(`Information of ${person.name} is updated!`);
            setTimeout(() => setMessage(null), 5000);
          })
          .catch((error) => {
            console.log(error);
            setMessage(
              `Information of ${person.name} is already deleted from server`
            );
            setStatus("error");
            setTimeout(() => {
              setMessage(null);
              setStatus("success");
            }, 5000);
            setPersons(persons.filter((p) => p.id !== id));
          });
      }
    } else {
      phoneBookService
        .create(newPerson)
        .then((returnedPerson) => {
          console.log("Response received");
          if(persons.some((e) => e.name === `${returnedPerson.name}`)) {
            throw Error(`Information of ${newPerson.name} is already exists`);
          }
          console.log(returnedPerson);
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          setStatus("success");
          setTimeout(() => setMessage(null), 5000);
          setMessage(`Information of ${newPerson.name} is added to the server`);
        })
        .catch((error) => {
          console.log(error);
          setMessage(
            `Information of ${newPerson.name} is already exists`
          );
          setStatus("error");
          setTimeout(() => {
            setMessage(null);
            setStatus("success");
          }, 5000);
        });
    }
  };

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const handleInput = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleDeletion = (id) => {
    const confirmed = window.confirm(
      `Delete ${persons.find((p) => p.id === id).name} ?`
    );
    if (confirmed) {
      phoneBookService
        .deletePerson(id)
        .then((returnedPerson) => {
          console.log(returnedPerson);
          setMessage(
            `Information of ${
              persons.find((p) => p.id === id).name
            } is deleted from server`
          );
          setStatus("success");
          setTimeout(() => setMessage(null), 5000);
          setPersons(persons.filter((p) => p.id !== id));
        })
        .catch((error) => {
          console.log(error);
          setMessage(
            `Information of ${
              persons.find((p) => p.id === id).name
            } is already deleted from server`
          );
          setStatus("error");
          setTimeout(() => {
            setMessage(null);
            setStatus("success");
          }, 5000);
          setPersons(persons.filter((p) => p.id !== id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} status={status} />
      <Filter handleSearch={handleSearch} search={search} persons={persons} />
      <h2>add a new</h2>
      <PersonForm
        action={addEntry}
        newName={newName}
        handleInput={handleInput}
        newNumber={newNumber}
        handleNumber={handleNumber}
      />
      <h2>Numbers</h2>
      <Persons
        search={search}
        persons={persons}
        handleFunction={handleDeletion}
      />
    </div>
  );
};

export default App;
