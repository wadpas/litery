import Image from "next/image";
import logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/product/product-list";

const HomePage = () => {
  return (
    <div>
      <ProductList data={sampleData.products} title="Книги" limit={3} />
    </div>
  );
};

export default HomePage;
