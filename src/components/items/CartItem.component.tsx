import { useNavigate } from "react-router";
import { Book } from "../../interfaces/books";

import { MdOutlineDelete } from "react-icons/md";

interface Props {
  book: Book;
}

const CartItemComponent: React.FC<Props> = ({ book }) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex text-slate-900 text-md my-2">
      <div
        className="flex-1 flex hover:cursor-pointer"
        onClick={() => navigate(`/book/${book.id}`)}
      >
        <img src={book.cover_image} alt="book" className="w-16" />
        <div className="flex flex-col m-4 text-slate-900">
          <p className="text-md">Title: {book.title}</p>
          <p className="text-sm my-0.5">Author: {book.author}</p>
          <p className="text-sm">{book.pages} pages</p>
        </div>
      </div>
      <p className="w-28 flex justify-center self-center">1</p>
      <p className="w-28 flex justify-center self-center">₹ {book.price}</p>
      <div className="w-28 text-xl text-red-500 self-center flex justify-center hover:cursor-pointer">
        <MdOutlineDelete />
      </div>
    </div>
  );
};

export default CartItemComponent;
