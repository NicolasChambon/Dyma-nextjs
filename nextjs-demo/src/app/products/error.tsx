'use client';

const ProductsError = ({ reset }: { reset: () => void }): JSX.Element => {
  return (
    <div className="error">
      <p>Oups</p>
      <button onClick={() => reset()}>Réessayer</button>
    </div>
  );
};

export default ProductsError;
