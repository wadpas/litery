import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="items-center p-0">
        <Link href={`/books/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="grid gap-4 p-4">
        <div className="text-sm">{product.brand}</div>
        <Link href={`/books/${product.slug}`}>
          <h2 className="text-base font-bold"> {product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">{product.price} UAH</p>
          ) : (
            <p className="text-destructive">Немає в наявності</p>
          )}{" "}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
