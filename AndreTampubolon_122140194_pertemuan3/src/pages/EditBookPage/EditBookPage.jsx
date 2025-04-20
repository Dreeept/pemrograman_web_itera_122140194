import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookContext } from "../../context/BookContext";
import BookForm from "../../components/BookForm/BookForm";

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useContext(BookContext);

  const bookToEdit = books.find((b) => b.id === Number(id));

  if (!bookToEdit) return <p>Buku tidak ditemukan.</p>;

  return (
    <div className="page-container">
      <BookForm bookToEdit={bookToEdit} onFinish={() => navigate("/")} />
    </div>
  );
};

export default EditBookPage;
