interface ProductLayoutProps {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

const ProductLayout = ({ children, params }: ProductLayoutProps) => {
  return <div>{children}</div>;
};

export default ProductLayout;
