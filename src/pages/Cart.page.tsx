import React from "react";
import OrderComponent from "../components/cart/Order.component";
import CartComponent from "../components/cart/Cart.component";
import { useAppContext } from "../context/App.context";
import EmptyCartComponent from "../components/cart/EmptyCart.component";

const CartPage = () => {
  const { cart } = useAppContext();
  return (
    <>
      {cart.length > 0 ? (
        <div className="flex min-h-screen bg-white">
          <div className="flex-1 p-16">
            <CartComponent />
          </div>
          <div className="w-96 bg-slate-100  p-16">
            <OrderComponent />
          </div>
        </div>
      ) : (
        <div className="flex min-h-screen bg-white min-w-[100vw]">
          <EmptyCartComponent />
        </div>
      )}
    </>
  );
};

export default CartPage;
