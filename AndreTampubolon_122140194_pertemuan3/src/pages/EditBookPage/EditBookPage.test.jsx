import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BookContext } from "../../context/BookContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import EditBookPage from "./EditBookPage";

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

const renderWithContext = (ui, { books = [] } = {}) => {
  return render(
    <MemoryRouter initialEntries={["/edit/1"]}>
      <BookContext.Provider value={{ books }}>{ui}</BookContext.Provider>
    </MemoryRouter>
  );
};

describe("EditBookPage", () => {
  test("menampilkan form untuk buku yang ditemukan", async () => {
    renderWithContext(<EditBookPage />, { books: mockBooks });
    const titleInput = await screen.findByDisplayValue("Atomic Habits");
    const authorInput = await screen.findByDisplayValue("James Clear");
    expect(titleInput).toBeInTheDocument();
    expect(authorInput).toBeInTheDocument();
  });

  test("menampilkan pesan jika buku tidak ditemukan", () => {
    renderWithContext(<EditBookPage />, { books: [] });
    expect(screen.getByText(/buku tidak ditemukan/i)).toBeInTheDocument();
  });

  test("navigasi ke halaman utama setelah mengedit buku", async () => {
    const mockNavigate = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(mockNavigate);

    renderWithContext(<EditBookPage />, { books: mockBooks });

    fireEvent.click(screen.getByText(/update buku/i));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });
});
