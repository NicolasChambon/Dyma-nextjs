const ProductsLayout = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="layout">
      <h1>Products layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default ProductsLayout;
