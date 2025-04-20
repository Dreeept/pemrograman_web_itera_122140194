import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { BookContext } from "../../context/BookContext";
import "./BookForm.css";

const BookForm = ({ bookToEdit, onFinish }) => {
  const { dispatch } = useContext(BookContext);
  const [book, setBook] = useState({ title: "", author: "", status: "milik" });

  useEffect(() => {
    if (bookToEdit) setBook(bookToEdit);
  }, [bookToEdit]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title || !book.author)
      return alert("Judul dan Penulis wajib diisi!");
    if (bookToEdit) {
      dispatch({ type: "UPDATE_BOOK", payload: book });
    } else {
      dispatch({ type: "ADD_BOOK", payload: { ...book, id: Date.now() } });
    }
    setBook({ title: "", author: "", status: "milik" });
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit} className="bookform-container">
      <h2 className="bookform-title">
        {bookToEdit ? "Edit Buku" : "Tambah Buku"}
      </h2>

      <div className="bookform-group">
        <label htmlFor="title" className="bookform-label">
          Judul Buku
        </label>
        <input
          id="title"
          className="bookform-input"
          name="title"
          placeholder="Masukkan judul buku"
          value={book.title}
          onChange={handleChange}
        />
      </div>

      <div className="bookform-group">
        <label htmlFor="author" className="bookform-label">
          Penulis
        </label>
        <input
          id="author"
          className="bookform-input"
          name="author"
          placeholder="Masukkan nama penulis"
          value={book.author}
          onChange={handleChange}
        />
      </div>

      <div className="bookform-group">
        <label htmlFor="status" className="bookform-label">
          Status Buku
        </label>
        <select
          id="status"
          name="status"
          value={book.status}
          onChange={handleChange}
          className="bookform-input"
        >
          <option value="milik">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </div>

      <button type="submit" className="bookform-button">
        {bookToEdit ? "Update" : "Tambah"} Buku
      </button>
    </form>
  );
};

BookForm.propTypes = {
  bookToEdit: PropTypes.object,
  onFinish: PropTypes.func,
};

export default BookForm;
