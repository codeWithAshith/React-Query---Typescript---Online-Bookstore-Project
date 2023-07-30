import React from "react";
import CartComponent from "../components/cart/Cart.component";
import OrderComponent from "../components/cart/Order.component";
import { BOOKS } from "../data/data";

const CartPage = () => {
  return (
    <div className="flex min-h-screen bg-white border-t-2 border-slate-200">
      <div className="flex-1 p-16">
        <CartComponent cart={BOOKS} />
      </div>
      <div className="w-96 bg-slate-100  p-16">
        <OrderComponent />
      </div>
    </div>
  );
};

export default CartPage;
