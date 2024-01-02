import React, { useState, useEffect } from 'react';
import { FormContact } from './FormContact/FormContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { nanoid } from 'nanoid';

import './App.module.css';
import '../redux/store';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const findContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <section>
        <h2>Phonebook</h2>
        <FormContact />
        <h2>Contacts list</h2>
        <ContactList
        // contacts={findContacts}
        />
        <Filter />
      </section>
    </>
  );
};
//
