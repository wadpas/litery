import BookImages from "@/components/book/book-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/book.actions";
import { notFound } from "next/navigation";

const ProductPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <BookImages images={product.images} />
          </div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <p className="h3-bold text-primary w-fit rounded-full bg-amber-100 px-3 py-1">
                  ${product.price}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <p className="font-bold">Description:</p>
              <p>{product.description}</p>
            </div>
          </div>

          <div className="mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <p className="font-bold">Price:</p>
                  <p>${product.price}</p>
                </div>
                <div className="mb-2 flex justify-between">
                  <p className="font-bold">Status:</p>
                  <p>
                    {product.stock > 0 ? (
                      <Badge variant="default">In Stock</Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </p>
                </div>
                {product.stock > 0 && (
                  <Button className="w-full">Add to Cart</Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
