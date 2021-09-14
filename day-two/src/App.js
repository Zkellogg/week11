import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Home from "./components/Home";
import { useEffect } from "react";

function App(props) {
  useEffect(() => {
    fetch("localhost:8080/allbooks")
      .then((response) => response.json())
      .then((books) => {
        console.log(books);
        props.onBooksLoaded(books);
      });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBooksLoaded: (books) => dispatch({ type: "BOOKSLOADED", payload: books }),
  };
};

export default connect(null, mapDispatchToProps)(App);
