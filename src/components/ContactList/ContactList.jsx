import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsAction } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(deleteContactsAction(id));
  };

  return (
    <ul>
      <div className={css.contact}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p className={css.contactNames}>
              {name} : {number}
            </p>

            <button
              className={css.contactBtn}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </ul>
  );
};
