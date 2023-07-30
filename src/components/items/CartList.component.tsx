import { Book } from "../../interfaces/books";
import CartItemComponent from "./CartItem.component";

interface Props {
  cart: Book[];
}

const CartListComponent: React.FC<Props> = ({ cart }) => {
  return (
    <div>
      <div className="flex text-slate-500 text-sm uppercase">
        <p className="flex-1">Product Details</p>
        <p className="w-28 flex justify-center">Quantity</p>
        <p className="w-28 flex justify-center">Price</p>
        <p className="w-28 flex justify-center">Remove</p>
      </div>
      <div className="my-4 ">
        {cart.map((book) => {
          return <CartItemComponent book={book} />;
        })}
      </div>
    </div>
  );
};

export default CartListComponent;
