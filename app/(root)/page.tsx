import ProductList from "@/components/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProducts} title="Книги" limit={3} />
    </div>
  );
};

export default HomePage;
