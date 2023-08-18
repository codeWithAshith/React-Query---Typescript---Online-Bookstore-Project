import { useParams } from "react-router";

import { BOOKS } from "../data/data";
import BookDetailsComponent from "../components/bookDetails/BookDetails.component";

const BookDetailsPage = () => {
  const { bookId } = useParams<{ bookId?: string }>();

  const book = BOOKS.find((b) => b.id === parseInt(bookId!));

  return (
    <div className="min-h-screen">
      <BookDetailsComponent book={book} />
    </div>
  );
};

export default BookDetailsPage;
