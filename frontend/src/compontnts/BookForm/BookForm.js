import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { addBook, FetchBook } from '../../redux/slices/booksSlice';
import { setError } from '../../redux/slices/errorSlice';
import createBookWithID from '../../utils/createBookWithID';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    const randomBookWithID = createBookWithID(randomBook, 'random');
    dispatch(addBook(randomBookWithID));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = createBookWithID({ title: title, author: author }, 'manual');
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    } else {
      dispatch(setError('You must fill title and author!'));
    }
  };

  const handleAddRandomViaAPI = async () => {
    try {   
      setIsLoading(true);
      await dispatch(FetchBook('http://localhost:4000/random-book-delayed'));
    } finally {
      setIsLoading(false);
    }
  };

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

        <button
          type="button"
          onClick={handleAddRandomViaAPI}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span>Loading book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'Add Random via API'
          )}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
