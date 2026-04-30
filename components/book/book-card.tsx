import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Book } from "@/types";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="items-center p-0">
        <Link href={`/books/${book.slug}`}>
          <Image
            src={book.images[0]}
            alt={book.title}
            height={500}
            width={310}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="grid gap-4 p-4">
        <Link href={`/books/${book.slug}`}>
          <h2 className="text-base font-bold"> {book.title}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{book.rating.toString()} Stars</p>
          <p className="font-bold">{book.price} UAH</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
