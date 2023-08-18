import React, { useEffect, useState } from "react";
import ButtonComponent from "../utils/Button.component";
import DividerComponent from "../utils/Divider.component";
import { useAppContext } from "../../context/App.context";
import { useNavigate } from "react-router";

const INITIAL_STATE = {
  total: 0,
  shipping: 60,
  discount: 60,
  tax: 0,
  totalCost: 0,
};

const OrderComponent = () => {
  const [totalPrice, setTotalPrice] = useState(INITIAL_STATE);
  const { cart, clearCart } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      acc = acc + parseInt(curr.price);
      return acc;
    }, 0);

    const tax = total * 0.18;

    const totalCost = total + totalPrice.shipping + totalPrice.discount + tax;

    setTotalPrice({
      ...totalPrice,
      total: total,
      tax: tax,
      totalCost: totalCost,
    });
  }, [cart]);

  return (
    <div className="flex flex-col w-full h-full">
      <p className="text-slate-900 text-2xl mb-4">Order Summary</p>
      <DividerComponent />
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Total</p>
        <p>₹ {totalPrice.total.toFixed(2)}</p>
      </div>
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Shipping</p>
        <p>₹ {totalPrice.shipping.toFixed(2)}</p>
      </div>
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Discount</p>
        <p>₹ {totalPrice.discount.toFixed(2)}</p>
      </div>
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Tax</p>
        <p>₹ {totalPrice.tax.toFixed(2)}</p>
      </div>
      <DividerComponent />
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Total Cost</p>
        <p>₹ {totalPrice.totalCost.toFixed(2)}</p>
      </div>
      <ButtonComponent
        className="self-center w-40 mt-4"
        label="Checkout"
        onClick={() => {
          clearCart();
          navigate("/");
        }}
      />
    </div>
  );
};

export default OrderComponent;
