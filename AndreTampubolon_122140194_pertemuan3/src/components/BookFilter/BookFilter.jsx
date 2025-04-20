import React from "react";
import PropTypes from "prop-types";
import "./BookFilter.css";

const BookFilter = ({ searchTerm, onSearch, statusFilter, onStatusChange }) => (
  <div className="bookfilter-container">
    <input
      type="text"
      placeholder="🔍 Cari judul atau penulis..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="bookfilter-input"
    />
    <select
      value={statusFilter}
      onChange={(e) => onStatusChange(e.target.value)}
      className="bookfilter-select"
    >
      <option value="">📚 Semua Status</option>
      <option value="milik">✅ Dimiliki</option>
      <option value="baca">📖 Sedang Dibaca</option>
      <option value="beli">🛒 Ingin Dibeli</option>
    </select>
  </div>
);

BookFilter.propTypes = {
  searchTerm: PropTypes.string,
  onSearch: PropTypes.func,
  statusFilter: PropTypes.string,
  onStatusChange: PropTypes.func,
};

export default BookFilter;
