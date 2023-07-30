import FilterComponent from "../components/shop/Filter.component";
import ProductListComponent from "../components/ProductList.component";
import SortComponent from "../components/shop/Sort.component";
import { BOOKS } from "../data/data";

const ShopPage = () => {
  return (
    <div className="flex min-w-[100vw] pb-10">
      <div className="min-w-80 w-72 ">
        <FilterComponent />
      </div>
      <div className="flex-1">
        <div className="m-8 w-auto flex justify-end">
          <SortComponent />
        </div>
        <ProductListComponent books={BOOKS} />
      </div>
    </div>
  );
};

export default ShopPage;
