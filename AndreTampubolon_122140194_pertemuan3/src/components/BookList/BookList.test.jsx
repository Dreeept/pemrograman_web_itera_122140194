import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BookContext } from "../../context/BookContext";
import BookList from "./BookList";
import { MemoryRouter } from "react-router-dom";

// Mock data buku
const mockBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    status: "baca",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    status: "milik",
  },
];

const renderWithContext = (ui, { books = [], dispatch = jest.fn() } = {}) => {
  return render(
    <MemoryRouter>
      <BookContext.Provider value={{ books, dispatch }}>
        {ui}
      </BookContext.Provider>
    </MemoryRouter>
  );
};

describe("BookList Component", () => {
  test("menampilkan pesan jika tidak ada buku", () => {
    renderWithContext(<BookList searchTerm="" statusFilter="" />, {
      books: [],
    });
    expect(
      screen.getByText(/tidak ada buku yang ditemukan/i)
    ).toBeInTheDocument();
  });

  test("merender buku yang cocok dengan search term", () => {
    renderWithContext(<BookList searchTerm="Atomic" statusFilter="" />, {
      books: mockBooks,
    });
    expect(screen.getByText(/atomic habits/i)).toBeInTheDocument();
    expect(screen.queryByText(/deep work/i)).not.toBeInTheDocument();
  });

  test("memfilter buku berdasarkan status", () => {
    renderWithContext(<BookList searchTerm="" statusFilter="milik" />, {
      books: mockBooks,
    });
    expect(screen.getByText(/deep work/i)).toBeInTheDocument();
    expect(screen.queryByText(/atomic habits/i)).not.toBeInTheDocument();
  });

  test("tombol edit dan hapus muncul untuk setiap buku", () => {
    renderWithContext(<BookList searchTerm="" statusFilter="" />, {
      books: mockBooks,
    });

    const editButtons = screen.getAllByText(/✏️ edit/i);
    const deleteButtons = screen.getAllByText(/❌ hapus/i);

    expect(editButtons.length).toBe(2);
    expect(deleteButtons.length).toBe(2);
  });

  test("dispatch dipanggil saat tombol hapus diklik", () => {
    const mockDispatch = jest.fn();
    renderWithContext(<BookList searchTerm="" statusFilter="" />, {
      books: mockBooks,
      dispatch: mockDispatch,
    });

    fireEvent.click(screen.getAllByText(/❌ hapus/i)[0]);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "DELETE_BOOK",
      payload: 1,
    });
  });
});
