import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  // const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(e.target.value);
  };

  return (
    <label>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={changeFilter}
        // changefilter={changefilter}
        filter={filter}
      />
    </label>
  );
};
