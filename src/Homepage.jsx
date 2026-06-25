import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import img5 from './Images/img5.png';
import img6 from './Images/img6.png';
import img7 from './Images/img7.png';
import img8 from './Images/img8.png';
import img9 from './Images/img9.png';
import img10 from './Images/img10.png';

import Swal from 'sweetalert2';
import { useState} from 'react';

import productsData from './Data/Products.json';
import ProductCategory from './Components/ProductCategory';
import CouponBox from './Components/CouponBox';
import CartSummary from './Components/CartSummary';

const image ={img2,img3,img4,img5,img6,img7,img8,img9,img10};

const products={
    kitchenware: productsData.kitchenware.map(p=> ({...p,img:image[p.img]})),
    sportswear: productsData.sportswear.map(p=> ({...p,img:image[p.img]})),
    furniture: productsData.furniture.map(p=> ({...p,img:image[p.img]})),
};

const Homepage=()=> {

    const [cart, setCart] = useState([]);
const [coupon, setCoupon] = useState('');
const [discount, setDiscount] = useState(0);

//event handler function
const handlePurchase = () => {
  if(cart.length===0){
  Swal.fire({
      title:'Cart is empty!',
      text:'Please add some products first.',
      icon:'warning',
      confirmButtonColor: '#E527B2'
    });
    return;
  }
  Swal.fire({
    title:'Congratulations',
    text:'Your Purchase is complete!',
    icon:'success',
    confirmButtonText: 'Go Home',
    confirmButtonColor: '#E527B2'
  });
  //After purchase,cart will be clear
  setCart([]);
  setDiscount(0);
  setCoupon('');
};
  
  
const handleApply = () => {
  if (coupon === 'SELL200') {

    if (totalPrice < 200) {
      Swal.fire({
        title:'Minimum purchase of 200 TK required to get discount!',
        text:`Your total is ${totalPrice} TK. Add more products to use this coupon.`,
        icon:'warning',
        confirmButtonColor: '#E527B2'
      });
      return;
    }                    

    setDiscount(20);
    Swal.fire({
      title:'Coupon Applied!',
      text:'You got 20% discount! Now you can make purchase with discount',
      icon:'success',
      confirmButtonColor: '#E527B2'
    });

  } else {
    setDiscount(0);
    Swal.fire({
      title:'Invalid Coupon!',
      text:'Please enter a valid coupon code.',
      icon:'error',
      confirmButtonColor: '#E527B2'
    });
  }
};

const handleAddToCart = (product) => {
  const exists = cart.find(item => item.id === product.id);

 if (exists) {  
    Swal.fire({
      title:'Already in cart!',
      icon:'warning',
      confirmButtonColor:'#E527B2'
    });
    return;      
  }
  
  setCart([...cart, product]);
};

// Calculation of discount
let totalPrice = 0;
cart.forEach(item =>{
  totalPrice =totalPrice + item.price;
});
const discountAmount =(totalPrice * discount)/100;
const finalAmount =totalPrice - discountAmount;


return(
    <>
<div className="min-h-screen bg-[#e7e1e1] overflow-x-hidden"> 
  {/* Upper section */}

    {/* for container */}
<div className="bg-[#f9f6e2] w-full min-h-[220px] md:min-h-[300px] flex flex-col md:flex-row items-center justify-center px-4 py-8">     
     {/* for box inside container */}
<div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">        
<p>---SALE FEVER---</p>

        <h1 className='font-bold text-[22px]'>
          Purchase TK 200 or <br />
          above & get <span className="text-[#E527B2]">20% off</span>
        </h1>

        <p> Use Promo Code{" "} <button className="bg-[#E527B2] text-white px-[8px] py-[4px] rounded-[4px] ml-[10px]"> SELL200</button> </p>
      </div>
{/* for image inside container */}
    <img src={img1}className="w-[140px] sm:w-[180px] md:w-[250px] h-auto mt-6 md:mt-0"/>
    </div>

    {/* Lower section */}
<div className="flex flex-col lg:flex-row gap-8 mt-10 px-4">
      {/* left side of lower section*/}
<div className="flex flex-col gap-10 flex-1 w-full">
         <ProductCategory title="Kitchenware"products={products.kitchenware}onAddToCart={handleAddToCart} />
          <ProductCategory title="Sportswear"products={products.sportswear}onAddToCart={handleAddToCart} />
          <ProductCategory title="Furniture"products={products.furniture}onAddToCart={handleAddToCart} />
        </div>

   {/* Right side  */}
<div className="w-full lg:w-[400px] shrink-0">
<CouponBox coupon={coupon} setCoupon={setCoupon} handleApply={handleApply} />
          <CartSummary
            cart={cart}
            totalPrice={totalPrice}
            discountAmount={discountAmount}
            finalAmount={finalAmount}
            handlePurchase={handlePurchase}
          />
</div>
</div>
</div>
</>
);
};

export default Homepage;
