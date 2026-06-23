
import { createRoot } from 'react-dom/client';
import './Page.css';
import img from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';
import img9 from './img9.png';
import img10 from './img10.png';

import Swal from 'sweetalert2';
import { FaStar } from "react-icons/fa";
import { useState} from 'react';
// Component
const Header = () => {

// Added products in an array
const products = {
  kitchenware: [
    { id:1, name:'K. Accessories', price:39, img:img2 },
    { id:2, name:'K. Accessories', price:25, img:img3 },
    { id:3, name:'Home Cooker', price:48, img:img4 },
  ],
  sportswear: [
    { id:4, name:'Sports Black Cap', price:49,  img:img5 },
    { id:5, name:'Full Jersey Set', price:69,  img:img6 },
    { id:6, name:'Sports Cates', price:159, img:img7 },
  ],
  furniture: [
    { id:7, name:'Single Relax Chair', price:185, img:img8 },
    { id:8, name:'Children Play', price:299, img:img9 },
    { id:9, name:'Flexible Sofa', price:339, img:img10 },
  ]
};

// made 3 states 
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

return (
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
    <img src={img}className="w-[140px] sm:w-[180px] md:w-[250px] h-auto mt-6 md:mt-0"/>
    </div>

    {/* Lower section */}
<div className="flex flex-col lg:flex-row gap-8 mt-10 px-4">
      {/* left side of lower section*/}
<div className="flex flex-col gap-10 flex-1 w-full">
          {/* for product category part */}
     {/* Kitchenware */}
    <div className="w-full text-[20px] font-bold">
      <h3>Kitchenware</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {products.kitchenware.map(product => (
          <div key={product.id} className="w-full bg-white rounded-lg flex flex-col items-center p-3 md:p-4">
            <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={product.img} />
            <div className="flex gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
            </div>
            <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">{product.name}</p>
            <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">{product.price}.00 TK</p>
            <button onClick={() => handleAddToCart(product)} className="mt-2 bg-[#E527B2] text-white text-[12px] px-[8px] py-[4px] rounded-[4px]">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>

    {/* Sportswear */}
    <div className="w-full text-[20px] font-bold">
      <h3>Sportswear</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {products.sportswear.map(product => (
          <div key={product.id} className="w-full bg-white rounded-lg flex flex-col items-center p-3 md:p-4">
            <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={product.img} />
            <div className="flex gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
            </div>
            <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">{product.name}</p>
            <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">{product.price}.00 TK</p>
            <button onClick={() => handleAddToCart(product)} className="mt-2 bg-[#E527B2] text-white text-[12px] px-[8px] py-[4px] rounded-[4px]">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>

    {/* Furniture */}
    <div className="w-full text-[20px] font-bold">
      <h3>Furniture</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {products.furniture.map(product => (
          <div key={product.id} className="w-full bg-white rounded-lg flex flex-col items-center p-4">
            <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={product.img} />
            <div className="flex gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
            </div>
            <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">{product.name}</p>
            <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">{product.price}.00 TK</p>
            <button onClick={() => handleAddToCart(product)} className="mt-2 bg-[#E527B2] text-white text-[12px] px-[8px] py-[4px] rounded-[4px]">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>

  </div>
        

      {/* Right side  */}
<div className="w-full lg:w-[400px] shrink-0">
        {/* for coupon  */}
      <div className="bg-white rounded-[8px] p-[20px] mb-[25px]">
          <h4>Have coupon?</h4>

        <div className="flex flex-col sm:flex-row mt-3">
  <input   value={coupon} onChange={(e) => setCoupon(e.target.value)} className="flex-1 p-3 border border-[#ddd] sm:rounded-l-md rounded-md"  placeholder="Coupon Code"/>

  <button onClick={handleApply} className="bg-[#E527B2] text-white px-4 py-3 sm:rounded-r-md rounded-md mt-2 sm:mt-0">Apply</button>
</div>
        </div>

      {/* summary section */}
<div className="bg-white rounded-[8px] p-[20px]">

  <div className="p-[10px] m-[15px]">
    {cart.length === 0 ? (
      <p className="text-gray-400 text-center text-[13px]">No items added yet</p>) :(
      cart.map((item, index) => (
        <p key={item.id} className="text-[13px]">
          {index + 1}.{item.name} - {item.price}.00 TK
        </p>
      ))
    )}
  </div>

  <hr />

  <div className="p-[10px] rounded-[5px] mb-[15px]">
    <p>Total price: <span className="text-gray-500">{totalPrice.toFixed(2)} TK</span></p>
    <p>Discount: <span className="text-gray-500">{discountAmount.toFixed(2)} TK</span></p>
    <p>Final Total: <span className="text-gray-500">{finalAmount.toFixed(2)} TK</span></p>
  </div>

  <hr />

  <button onClick={handlePurchase} className="w-full bg-[#E527B2] text-white p-[12px] rounded-[5px] font-bold">
    Make Purchase
  </button>

</div>
         </div>
     </div>
     </div>
  
   </>
  );
 };

createRoot(document.getElementById('root')).render(
  <Header />
);
