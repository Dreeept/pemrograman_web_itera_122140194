import { useContext, useMemo } from "react";
import { BookContext } from "../context/BookContext";

const useBookStats = () => {
  const { books } = useContext(BookContext);

  return useMemo(() => {
    const total = books.length;
    const owned = books.filter((book) => book.status === "milik").length;
    const reading = books.filter((book) => book.status === "baca").length;
    const wishlist = books.filter((book) => book.status === "beli").length;
    return { total, owned, reading, wishlist };
  }, [books]);
};

export default useBookStats;
