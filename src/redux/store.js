import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';

const reducer = {
  contacts: contactReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer });
