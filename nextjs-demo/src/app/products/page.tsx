interface Category {
  slug: string;
  name: string;
}

const ProductsPage = async (): Promise<JSX.Element> => {
  const response = await fetch(
    'https://app-dir.vercel.app/api/categories?delay=5000',
    { cache: 'no-cache' }
  );
  const categories: Array<Category> = await response.json();

  return (
    <div className="page">
      <h2>Welcome to product page</h2>
      <ul>
        {categories.map((category: Category) => (
          <li key={category.slug}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
