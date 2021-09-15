const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKSLOADED":
      return {
        ...state,
        books: action.payload,
      };
    case "ADDBOOK":
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
