const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKLOADED":
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
