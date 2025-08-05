import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
import { addBook } from '../../redux/slices/booksSlice';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    const randomBookWithID = createBookWithID(randomBook);
    dispatch(addBook(randomBookWithID));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = createBookWithID({ title: title, author: author });
      console.log(addBook(book));
      dispatch(addBook(book));
    }
  };
  try {
    const handleAddRandomViaAPI = async () => {
      const res = await axios.get('http://localhost:4000/random-book');
      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithID(res.data)));
      }
    };
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="title">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};

export default BookForm;
