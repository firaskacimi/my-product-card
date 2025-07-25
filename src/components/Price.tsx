import { product } from '../data/product';

const Price = () => {
  return (
    <div className="text-3xl font-extrabold text-accent-purple mb-4">
      ${product.price}
    </div>
  );
};

export default Price;