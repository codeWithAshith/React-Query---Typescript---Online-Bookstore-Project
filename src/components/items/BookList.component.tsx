import React from "react";
import { Book } from "../../interfaces/books";
import BookItemComponent from "./BookItem.component";

interface Props {
  books: Book[];
}

const BookListComponent: React.FC<Props> = ({ books }) => {
  return (
    <div className="mx-8 grid grid-cols-4 gap-4">
      {books.map((book) => (
        <BookItemComponent key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookListComponent;
