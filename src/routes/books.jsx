/*eslint-disable*/
import { useSelector } from 'react-redux';
import React from 'react';
import Form from './addBook';
import Book from './book';
 
function Books() {
  const bookList =useSelector((state) => state.book);
  return (
    <div>
    <div>
      <h1>Books</h1>
      {bookList.map((book) =>(
        <Book
        key={book.id}
        title = {book.title}
        author = {book.author}
        ids = {book.id}
        />
      ))}
    </div>
    <Form />

    </div>

  );
}

export default Books;