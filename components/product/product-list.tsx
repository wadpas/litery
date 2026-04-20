const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitData = limit ? data.slice(0, limit) : data;

  return (
    <div>
      <h1>{title}</h1>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {limitData.map((product: any) => (
            <div key={product.slug}>{product.name}</div>
          ))}
        </div>
      ) : (
        <div>Книги відсутні</div>
      )}
    </div>
  );
};

export default ProductList;
("");
