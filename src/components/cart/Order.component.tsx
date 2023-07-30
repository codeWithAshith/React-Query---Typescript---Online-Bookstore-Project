import React from "react";
import ButtonComponent from "../utils/Button.component";
import DividerComponent from "../utils/Divider.component";

const OrderComponent = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <p className="text-slate-900 text-2xl mb-4">Order Summary</p>
      <DividerComponent />
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Total</p>
        <p>₹ 300</p>
      </div>
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Shipping</p>
        <p>₹ 60</p>
      </div>
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Discount</p>
        <p>₹ 40</p>
      </div>
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Tax</p>
        <p>₹ 30</p>
      </div>
      <DividerComponent />
      <div className="flex my-2 justify-between text-slate-900 text-md">
        <p>Total Cost</p>
        <p>₹ 300</p>
      </div>
      <ButtonComponent
        className="self-center w-40 mt-4"
        label="Checkout"
        onClick={() => {}}
      />
    </div>
  );
};

export default OrderComponent;
