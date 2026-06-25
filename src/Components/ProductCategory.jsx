import ProductCard from './ProductCard';

const ProductCategory =({title, products, onAddToCart})=>{
  return(
 <div className="w-full text-[20px] font-bold">
      <h3>{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>

      );
};

export default ProductCategory;