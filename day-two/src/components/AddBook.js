import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function AddBook(props) {
  const [bookInput, setBookInput] = useState({});

  const handleTextChange = (e) => {
    setBookInput({
      ...bookInput,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       title: bookInput.title,
  //       genre: bookInput.genre,
  //       publisher: bookInput.publisher,
  //       year: bookInput.year,
  //       image: bookInput.image,
  //     }),
  //   };
  //   fetch("http://localhost:8080/addbook", requestOptions)
  //     .then((response) => response.json())
  //     .then((books) => setBookInput(books));
  // }, []);

  const saveBook = () => {
    props.onBookAdd(bookInput);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: bookInput.title,
        genre: bookInput.genre,
        publisher: bookInput.publisher,
        year: bookInput.year,
        imageURL: bookInput.image,
      }),
    };
    fetch("http://localhost:8080/addbook", requestOptions)
      .then((response) => response.json())
      .then((books) => setBookInput(books));
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        onChange={handleTextChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="genre"
        onChange={handleTextChange}
        placeholder="Genre"
      />
      <input
        type="text"
        name="publisher"
        onChange={handleTextChange}
        placeholder="Publisher"
      />
      <input
        type="text"
        name="year"
        onChange={handleTextChange}
        placeholder="Year"
      />
      <input
        type="text"
        name="image"
        onChange={handleTextChange}
        placeholder="Image"
      />
      <button onClick={saveBook}>Save Book</button>
    </div>
  );
}

const dispatchToProps = (dispatch) => {
  return {
    onBookAdd: (bookInput) => dispatch({ type: "ADDBOOK", payload: bookInput }),
  };
};

// const stateToProps = () => {
//   return {

//   }
// }

export default connect(null, dispatchToProps)(AddBook);
