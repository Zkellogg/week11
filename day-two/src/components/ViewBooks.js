import { useEffect } from "react";
import { connect } from "react-redux";

function ViewBooks(props) {
  useEffect(() => {
    fetch("http://localhost:8080/allbooks")
      .then((response) => response.json())
      .then((books) => {
        console.log(books);
        props.onBooksLoaded(books);
      });
  }, []);

  const bookItems = props.books.map((book, index) => {
    return <li>{book.title}</li>;
  });

  return (
    <>
      <h1>View all Books</h1>
      <ul>{bookItems}</ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBooksLoaded: (books) => dispatch({ type: "BOOKSLOADED", payload: books }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBooks);
