interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  console.log(params);
  return (
    <div className="product-page">
      <h1>Product page : {params.id}</h1>
    </div>
  );
};

export default ProductPage;
