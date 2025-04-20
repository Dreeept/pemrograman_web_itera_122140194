import React, { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

export const BookContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "UPDATE_BOOK":
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    case "DELETE_BOOK":
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useLocalStorage("books", initialState);
  const [books, dispatch] = useReducer(reducer, storedBooks);

  useEffect(() => {
    setStoredBooks(books);
  }, [books, setStoredBooks]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
