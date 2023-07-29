import { Book } from "../../interfaces/books";
import ButtonComponent from "../Button.component";

interface Props {
  book: Book;
}

const ProductItemComponent: React.FC<Props> = ({ book }) => {
  return (
    <div className="w-full border border-slate-900 rounded-2xl flex flex-col items-start relative bg-slate-200">
      <img className="h-80 p-12" src={book.cover_image} alt="book" />
      <div className="flex flex-col mb-4 pl-4 w-full">
        <p className="text-xl text-slate-900 font-semibold">{book.title}</p>
        <p className="text-md text-slate-900 my-1">Author: {book.author}</p>
        <p className="text-xl font-semibold text-red-500 mb-4">
          ₹ {book.price}
        </p>
        <ButtonComponent
          className="w-40 self-center h-12"
          label="Add to Cart"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ProductItemComponent;
