import Image from "next/image";
import logo from "@/public/logo.svg";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={sampleData.products} title="Книги" limit={3} />
    </div>
  );
};

export default HomePage;
