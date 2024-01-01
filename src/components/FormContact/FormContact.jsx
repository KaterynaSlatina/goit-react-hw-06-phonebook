import css from './FormContact.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addContactsAction } from '../../redux/contactsSlice';

export const FormContact = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  // const handleSubmitContact = () => {
  //   dispatch(addContactsAction());
  // };

  const handleSubmitContact = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      dispatch(addContactsAction(newContact));
      setName('');
      setNumber('');
    }
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  // const deleteContact = () => {
  //   dispatch(deleteContactsAction());
  // };

  return (
    <form onSubmit={handleSubmitContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
};
