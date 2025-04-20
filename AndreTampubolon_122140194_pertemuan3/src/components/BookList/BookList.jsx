import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../../context/BookContext";
import BookForm from "../BookForm/BookForm";
import "./BookList.css";

const BookList = ({ searchTerm, statusFilter }) => {
  const { books, dispatch } = useContext(BookContext);
  const [editBook, setEditBook] = useState(null);

  const handleDelete = (id) => dispatch({ type: "DELETE_BOOK", payload: id });

  const filteredBooks = books.filter((book) => {
    return (
      (!statusFilter || book.status === statusFilter) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="booklist-container">
      {editBook && (
        <BookForm bookToEdit={editBook} onFinish={() => setEditBook(null)} />
      )}

      {filteredBooks.length === 0 ? (
        <p className="booklist-empty">⚠️ Tidak ada buku yang ditemukan.</p>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">
                {book.author} —{" "}
                <span className="book-status">{book.status}</span>
              </p>
            </div>
            <div className="book-actions">
              <Link to={`/edit/${book.id}`} className="btn-edit">
                ✏️ Edit
              </Link>
              <button
                onClick={() => handleDelete(book.id)}
                className="btn-delete"
              >
                ❌ Hapus
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
