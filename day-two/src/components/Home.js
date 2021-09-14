import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to DEEZ BOOKS!</h1>
      <NavLink to="./ViewBooks">View Books</NavLink>
      <NavLink to="./AddBook">Add a Book</NavLink>
    </>
  );
}

export default Home;
