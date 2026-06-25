
import { FaStar } from "react-icons/fa";
const ProductCard = ({product, onAddToCart})=>{
  return(         
     <div key={product.id} className="w-full bg-white rounded-lg flex flex-col items-center p-3 md:p-4">
            <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={product.img} />
            <div className="flex gap-1">
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-gray-500"/>
            </div>
            <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">{product.name}</p>
            <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">{product.price}.00 TK</p>
            <button onClick={() => onAddToCart(product)} className="mt-2 bg-[#E527B2] text-white text-[12px] px-[8px] py-[4px] rounded-[4px]">Add to Cart</button>
          </div>
       );
};
export default ProductCard;