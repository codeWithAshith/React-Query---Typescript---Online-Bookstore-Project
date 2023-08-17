import React from "react";
import OrderComponent from "../components/cart/Order.component";
import CartComponent from "../components/cart/Cart.component";

const CartPage = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 p-16">
        <CartComponent />
      </div>
      <div className="w-96 bg-slate-100  p-16">
        <OrderComponent />
      </div>
    </div>
  );
};

export default CartPage;
