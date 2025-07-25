import { product } from '../data/product.js';

const Name = () => {
  return (
    <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
      {product.name}
    </h2>
  );
};

export default Name;