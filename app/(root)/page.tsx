import BookList from "@/components/book/book-list";
import { getBooks } from "@/lib/actions/book.actions";

const HomePage = async () => {
  const books = await getBooks();
  return (
    <div>
      <BookList data={books} title="Книги" limit={3} />
    </div>
  );
};

export default HomePage;
