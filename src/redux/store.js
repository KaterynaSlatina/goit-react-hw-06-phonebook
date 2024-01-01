// import { nameReducer } from './name/nameReducer';
// import { numberReducer } from './number/numberReducer';
import { filterReducer } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';

const reducer = {
  contacts: contactReducer,
  // name: nameReducer,
  // number: numberReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer });
