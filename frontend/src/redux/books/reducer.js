import * as actionTypes from "./actionTypes";

const initialState = [];

const booksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default booksListReducer;
