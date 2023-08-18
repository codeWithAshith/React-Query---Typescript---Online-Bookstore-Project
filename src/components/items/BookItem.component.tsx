import { useState } from "react";
import { Book } from "../../interfaces/books";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsInfoCircle, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useAppContext } from "../../context/App.context";
import { useToast } from "../../context/Toast.context";
import { CONSTANT } from "../../constants";

interface Props {
  book: Book;
}

const BookItemComponent: React.FC<Props> = ({ book }) => {
  const [isHover, setHover] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useAppContext();
  const { showToast } = useToast();

  return (
    <div
      className="w-full border border-slate-900 rounded flex flex-col items-center relative bg-slate-200 hover:cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <img className="h-56 my-8" src={book.cover_image} alt="book" />
      <div className="w-full bg-slate-50 flex flex-col items-start">
        <div className="flex flex-col my-4 w-full px-4">
          <p className="text-md text-slate-900 font-semibold">{book.title}</p>
          <p className="text-sm text-slate-900 my-1">Author: {book.author}</p>
          <p className="text-xl font-semibold text-red-500">₹ {book.price}</p>
        </div>
      </div>
      {isHover && (
        <div className="absolute rounded bg-slate-50 w-48 h-12 translate-y-28 flex p-4 items-center justify-center gap-6">
          <div
            className="text-slate-900 text-xl"
            onClick={() => {
              if (!addToCart(book)) {
                showToast("Book already exist in Cart!!!");
              } else {
                showToast("Added to cart", CONSTANT.SUCCESS);
              }
            }}
          >
            <MdOutlineAddShoppingCart />
          </div>
          <div
            className="text-slate-900 text-xl"
            onClick={() => navigate(`/book/${book.id}`)}
          >
            <BsInfoCircle />
          </div>
          <div className="text-slate-900 text-xl">
            <BsHeart />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookItemComponent;
