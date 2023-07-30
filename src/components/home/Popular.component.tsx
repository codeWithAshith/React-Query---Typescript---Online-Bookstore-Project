import { BOOKS } from "../../data/data";
import BookListComponent from "../items/BookList.component";

const PopularComponent = () => {
  return (
    <div className="flex min-h-[100vh] bg-slate-100 pb-12">
      <div className="flex-1 flex flex-col px-8">
        <p className="text-slate-900 text-5xl mb-4 text-center my-16">
          Featured Collections
        </p>
        <p className="text-slate-500 text-md text-center mb-8">
          Contrary to popular belief, Lorem Ipsum is not simply random.
        </p>
        <BookListComponent books={BOOKS.slice(0, 4)} />
      </div>
    </div>
  );
};

export default PopularComponent;
