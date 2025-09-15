import YandexMetrika from "./compontnts/YandexMetrika/YandexMetrika";
import BookList from "./compontnts/BookList/BookList";
import BookForm from "./compontnts/BookForm/BookForm";
import Filter from "./compontnts/Filter/Filter";
import Error from "./compontnts/Error/Error";
import "./App.css";

function App() {
  return (
    <div className="app">
      <YandexMetrika />
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      <Error />
    </div>
  );
}

export default App;
