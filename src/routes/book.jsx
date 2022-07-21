/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removingAction } from '../Redux/books/book.js';

function Book({ title, author, ids }) {
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(removingAction({ id }));
  };
  return (
    <div>
      <li>{title}{' '}:
       {' '} {author} </li>
      <button type="submit" onClick={() => remove(ids)}> Remove</button>
    </div>
  );
}

Book.propTypes = ({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ids: PropTypes.string.isRequired,
});

export default Book;