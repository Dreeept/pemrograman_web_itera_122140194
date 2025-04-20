import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookForm from "./BookForm";
import { BookContext } from "../../context/BookContext";
import React from "react";

// Mock dispatch function
const mockDispatch = jest.fn();
const mockOnFinish = jest.fn();

// Helper to render with context
const renderWithContext = (ui) => {
  return render(
    <BookContext.Provider value={{ dispatch: mockDispatch }}>
      {ui}
    </BookContext.Provider>
  );
};

describe("BookForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders form inputs and button", () => {
    renderWithContext(<BookForm onFinish={mockOnFinish} />);

    expect(screen.getByLabelText(/judul buku/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/penulis/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/status buku/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /tambah buku/i })
    ).toBeInTheDocument();
  });

  test("shows alert if form submitted with empty fields", () => {
    window.alert = jest.fn(); // mock alert
    renderWithContext(<BookForm onFinish={mockOnFinish} />);
    fireEvent.click(screen.getByRole("button", { name: /tambah buku/i }));
    expect(window.alert).toHaveBeenCalledWith("Judul dan Penulis wajib diisi!");
  });

  test("dispatches ADD_BOOK action on valid submit", () => {
    renderWithContext(<BookForm onFinish={mockOnFinish} />);

    fireEvent.change(screen.getByLabelText(/judul buku/i), {
      target: { value: "Atomic Habits" },
    });
    fireEvent.change(screen.getByLabelText(/penulis/i), {
      target: { value: "James Clear" },
    });

    fireEvent.click(screen.getByRole("button", { name: /tambah buku/i }));

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "ADD_BOOK",
        payload: expect.objectContaining({
          title: "Atomic Habits",
          author: "James Clear",
          status: "milik",
        }),
      })
    );
    expect(mockOnFinish).toHaveBeenCalled();
  });

  test("renders in edit mode with pre-filled values", () => {
    const bookToEdit = {
      id: 123,
      title: "Deep Work",
      author: "Cal Newport",
      status: "baca",
    };

    renderWithContext(
      <BookForm bookToEdit={bookToEdit} onFinish={mockOnFinish} />
    );

    expect(screen.getByDisplayValue("Deep Work")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Cal Newport")).toBeInTheDocument();
    expect(screen.getByLabelText(/status buku/i)).toHaveValue("baca");
    expect(
      screen.getByRole("button", { name: /update buku/i })
    ).toBeInTheDocument();
  });

  test("dispatches UPDATE_BOOK action when editing", () => {
    const bookToEdit = {
      id: 456,
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "milik",
    };

    renderWithContext(
      <BookForm bookToEdit={bookToEdit} onFinish={mockOnFinish} />
    );

    fireEvent.change(screen.getByLabelText(/penulis/i), {
      target: { value: "Uncle Bob" },
    });

    fireEvent.click(screen.getByRole("button", { name: /update buku/i }));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_BOOK",
      payload: {
        id: 456,
        title: "Clean Code",
        author: "Uncle Bob",
        status: "milik",
      },
    });

    expect(mockOnFinish).toHaveBeenCalled();
  });
});
