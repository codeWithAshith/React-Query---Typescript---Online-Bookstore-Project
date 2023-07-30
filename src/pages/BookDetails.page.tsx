import { useParams } from "react-router";
import { BsHeart, BsShare } from "react-icons/bs";

import ButtonComponent from "../components/utils/Button.component";

import { BOOKS } from "../data/data";

const BookDetailsPage = () => {
  const { bookId } = useParams<{ bookId?: string }>();
  const book = BOOKS.find((b) => b.id === parseInt(bookId!));

  return (
    <div className="min-h-screen flex p-16">
      <div className="flex flex-1 border w-full justify-center items-center bg-slate-100">
        <img src={book?.cover_image} alt="books" className="w-80 " />
      </div>
      <div className="flex-1 mx-8 py-4 text-slate-900">
        <p className="text-4xl">{book?.title}</p>
        <p className="text-red-500 my-2 text-3xl">₹ {book?.price}</p>
        <p className="mb-1 text-xl">{book?.author}</p>
        <p className="text-lg">ISBN {book?.isbn}</p>
        <p className="text-md">Release Date: {book?.releaseDate}</p>
        <p className="mb-2 text-md">{book?.pages} pages</p>
        <p className="text-md text-justify mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          accusantium fuga quae in eaque consequuntur, animi alias nulla a?
          Veniam eum quo repellat voluptatem voluptas placeat, aliquid natus
          consectetur temporibus culpa quis. Quibusdam, quo optio dolor fuga,
          ducimus magnam vero odit sint perferendis ratione eligendi fugiat
          veritatis aliquam iste sapiente esse libero neque nostrum facere culpa
          corporis totam quam odio. Molestias veritatis, officia neque eius
          nihil corporis accusamus perferendis blanditiis, placeat ipsam, animi
          quae quisquam. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Fuga ducimus accusamus nihil aliquid vitae quisquam ullam,
          voluptate error consequatur expedita.
        </p>
        <div className="flex items-center">
          <ButtonComponent
            label="Add to Cart"
            onClick={() => {}}
            className="px-24"
          />
          <div className="text-slate-900 text-2xl mx-4">
            <BsHeart />
          </div>
          <div className="text-slate-900 text-2xl mx-4">
            <BsShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
