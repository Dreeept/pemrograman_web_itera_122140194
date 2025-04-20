import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import EditBookPage from "./pages/EditBookPage/EditBookPage"; // ← Buat nanti

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/stats" element={<Stats />} />
  <Route path="/edit/:id" element={<EditBookPage />} /> {/* Ini baru */}
</Routes>;

const App = () => (
  <BookProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
        {/* Tambahkan ini */}
      </Routes>
    </Router>
  </BookProvider>
);

export default App;
