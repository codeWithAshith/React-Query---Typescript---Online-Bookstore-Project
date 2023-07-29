import { BOOKS } from "../data/data";
import ProductListComponent from "./ProductList.component";

const PopularComponent = () => {
  return (
    <div className="flex min-h-[100vh] bg-slate-100">
      <div className="flex-1 flex flex-col px-8">
        <p className="text-slate-900 text-5xl mb-4 text-center my-16">
          Featured Collections
        </p>
        <p className="text-slate-500 text-md mb-4 text-center mb-8">
          Contrary to popular belief, Lorem Ipsum is not simply random.
        </p>
        <ProductListComponent books={BOOKS} />
      </div>
    </div>
  );
};

export default PopularComponent;
