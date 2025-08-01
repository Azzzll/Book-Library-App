import * as actionTypes from "./actionTypes";

export const add_book = (newBook) => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  };
};
