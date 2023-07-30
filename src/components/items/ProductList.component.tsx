import React from "react";
import { Book } from "../../interfaces/books";
import ProductItemComponent from "./ProductItem.component";

interface Props {
  books: Book[];
}

const ProductListComponent: React.FC<Props> = ({ books }) => {
  return (
    <div className="mx-8 grid grid-cols-4 gap-4">
      {books.map((book) => (
        <ProductItemComponent key={book.id} book={book} />
      ))}
    </div>
  );
};

export default ProductListComponent;
