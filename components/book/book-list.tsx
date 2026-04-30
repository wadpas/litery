import { Book } from "@/types";
import ProductCard from "./book-card";

const BookList = ({
  data,
  title,
  limit,
}: {
  data: Book[];
  title?: string;
  limit?: number;
}) => {
  const limitData = limit ? data.slice(0, limit) : data;

  return (
    <div>
      <h1>{title}</h1>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitData.map((book: Book) => (
            <ProductCard key={book.slug} book={book} />
          ))}
        </div>
      ) : (
        <div>Книги відсутні</div>
      )}
    </div>
  );
};

export default BookList;
