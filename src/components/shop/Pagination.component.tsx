import React from "react";
import ButtonComponent from "../utils/Button.component";

const PaginationComponent = () => {
  return (
    <div className="flex gap-4 justify-center mt-8">
      <ButtonComponent
        label="Previous"
        onClick={() => {}}
        className="w-40"
        variant="outlined"
      />
      <ButtonComponent
        label="Next"
        onClick={() => {}}
        className="w-40"
        variant="outlined"
      />
    </div>
  );
};

export default PaginationComponent;
