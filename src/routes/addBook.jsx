/*eslint-disable*/
import { useRef } from 'react';
import nextId from 'react-id-generator';
import { addingAction } from '../Redux/books/book';
import { useDispatch } from 'react-redux';

function Form() {
  const dispatch = useDispatch();
  const titleInput = useRef(null);
  const authorInput = useRef(null);
  const addBook = (e) => {
    e.preventDefault();
    dispatch(
      addingAction({
        id: nextId(),
        title: titleInput.current.value,
        author: authorInput.current.value,
      }),
    );
  };
  return (
  <form>
    <input ref={titleInput} required id="title" placeholder="Book title" />
      <input
        ref={authorInput}
        type="text"
        required
        id="author"
        placeholder="Book author"
      />
      <button onClick={addBook} type="submit">
        Add book
      </button>
  </form>
);
}

export default Form;