import React from "react";
import DividerComponent from "../utils/Divider.component";
import CartListComponent from "../items/CartList.component";
import ButtonComponent from "../utils/Button.component";
import { useNavigate } from "react-router";
import { Book } from "../../interfaces/books";

interface Props {
  cart: Book[];
}

const CartComponent: React.FC<Props> = ({ cart }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-full">
      <div className="flex justify-between text-slate-900 text-2xl mb-4">
        <p>My Cart</p>
        <p className="px-6">3 Books</p>
      </div>
      <DividerComponent />
      <div className="my-4">
        <CartListComponent cart={cart} />
      </div>
      <DividerComponent />
      <ButtonComponent
        label="Continue Shopping"
        onClick={() => navigate("/shop")}
        className="my-4"
      />
    </div>
  );
};

export default CartComponent;
