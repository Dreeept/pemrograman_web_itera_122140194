import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookFilter from "./BookFilter";

describe("BookFilter Component", () => {
  const mockOnSearch = jest.fn();
  const mockOnStatusChange = jest.fn();

  beforeEach(() => {
    render(
      <BookFilter
        searchTerm=""
        onSearch={mockOnSearch}
        statusFilter=""
        onStatusChange={mockOnStatusChange}
      />
    );
  });

  test("renders input and select elements", () => {
    expect(
      screen.getByPlaceholderText(/cari judul atau penulis/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("calls onSearch when typing in the search input", async () => {
    const input = screen.getByPlaceholderText(/cari judul atau penulis/i);
    await userEvent.type(input, "Atomic Habits");

    expect(mockOnSearch).toHaveBeenCalled();
    expect(mockOnSearch).toHaveBeenCalledWith("A");
  });

  test("calls onStatusChange when selecting a status", async () => {
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "baca");

    expect(mockOnStatusChange).toHaveBeenCalledWith("baca");
  });
});
