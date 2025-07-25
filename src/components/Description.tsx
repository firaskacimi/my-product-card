import { product } from '../data/product';

const Description = () => {
  return (
    <p className="text-muted-foreground leading-relaxed mb-6">
      {product.description}
    </p>
  );
};

export default Description;