import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookForm from "../../components/BookForm/BookForm";
import BookList from "../../components/BookList/BookList";
import BookFilter from "../../components/BookFilter/BookFilter";
import "./Home.css"; // kita buat file ini

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  return (
    <div className="home-container">
      <h1 className="home-title">Manajemen Buku Pribadi</h1>

      <BookForm onFinish={() => {}} />
      <BookFilter
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />
      <Link to="/stats" className="btn-stats">
        📊 Lihat Statistik
      </Link>
      <BookList searchTerm={searchTerm} statusFilter={statusFilter} />
    </div>
  );
};

export default Home;
