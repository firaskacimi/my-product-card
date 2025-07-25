import { product } from '../data/product';
import headphonesImg from '../assets/headphones.jpg';

const Image = () => {
  return (
    <div className="relative overflow-hidden rounded-xl mb-6 group">
      <img 
        src={headphonesImg} 
        alt={product.name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-accent opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
    </div>
  );
};

export default Image;