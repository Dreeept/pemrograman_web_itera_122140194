import React from "react";
import useBookStats from "../../hooks/useBookStats";
import { useNavigate } from "react-router-dom";
import "./Stats.css";

const Stats = () => {
  const { total, owned, reading, wishlist } = useBookStats();
  const navigate = useNavigate();

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBackClick = () => {
    navigate(-1); // Navigasi kembali ke halaman sebelumnya
  };

  return (
    <div className="stats-container">
      <h1 className="stats-title">📊 Statistik Buku</h1>
      <ul className="stats-list">
        <li className="stats-item">
          <span className="label">📚 Total Buku:</span>
          <span>{total}</span>
        </li>
        <li className="stats-item">
          <span className="label">✅ Dimiliki:</span>
          <span>{owned}</span>
        </li>
        <li className="stats-item">
          <span className="label">📖 Sedang Dibaca:</span>
          <span>{reading}</span>
        </li>
        <li className="stats-item">
          <span className="label">🛒 Ingin Dibeli:</span>
          <span>{wishlist}</span>
        </li>
      </ul>

      {/* Tombol Kembali */}
      <button onClick={handleBackClick} className="btn-back">
        🔙 Kembali
      </button>
    </div>
  );
};

export default Stats;
