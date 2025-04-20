import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BookProvider, BookContext } from "./BookContext";
import userEvent from "@testing-library/user-event";
import useLocalStorage from "../hooks/useLocalStorage";

jest.mock("../hooks/useLocalStorage", () => ({
  __esModule: true,
  default: jest.fn(() => [[], jest.fn()]), // Mocking useLocalStorage dengan nilai default: array kosong dan setter
}));

// Membuat komponen penguji untuk memanfaatkan BookContext
const TestComponent = () => {
  const { books, dispatch } = React.useContext(BookContext);

  const addBook = () => {
    dispatch({
      type: "ADD_BOOK",
      payload: { id: 1, title: "Test Book" },
    });
  };

  const updateBook = () => {
    dispatch({
      type: "UPDATE_BOOK",
      payload: { id: 1, title: "Updated Book" },
    });
  };

  const deleteBook = () => {
    dispatch({
      type: "DELETE_BOOK",
      payload: 1,
    });
  };

  return (
    <div>
      <button onClick={addBook}>Add Book</button>
      <button onClick={updateBook}>Update Book</button>
      <button onClick={deleteBook}>Delete Book</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

test("should add, update, and delete books in the context", () => {
  render(
    <BookProvider>
      <TestComponent />
    </BookProvider>
  );

  // Mengecek apakah list awal kosong
  expect(screen.queryByText("Test Book")).toBeNull();

  // Menambahkan buku
  userEvent.click(screen.getByText(/Add Book/i));

  // Memeriksa apakah buku ditambahkan
  expect(screen.getByText("Test Book")).toBeInTheDocument();

  // Memperbarui buku
  userEvent.click(screen.getByText(/Update Book/i));

  // Memeriksa apakah buku diperbarui
  expect(screen.getByText("Updated Book")).toBeInTheDocument();

  // Menghapus buku
  userEvent.click(screen.getByText(/Delete Book/i));

  // Memeriksa apakah buku dihapus
  expect(screen.queryByText("Updated Book")).toBeNull();
});
