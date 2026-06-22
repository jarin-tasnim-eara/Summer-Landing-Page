
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
// Component
const Header = () => {

//event handler function
const handlePurchase = () => {
    Swal.fire({
      title: 'Congratulations',
      text: 'Your Purchase the product',
      icon: 'success',
      confirmButtonText: 'Go Home',
      confirmButtonColor: '#E527B2'
    });
  };

const handleApply = () => {
 
};

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
          {/* for product category 1 */}
  <div className="w-full text-[20px] font-bold">       
     <h3>Kitchenware</h3>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
<div className="w-full bg-white rounded-lg flex flex-col items-center p-3 md:p-4">              
            <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={img2} />
              <div className="flex gap-1">
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
</div>
              <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">K. Accessories</p>
      
              <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">39.00 TK</p>
            </div>

<div className="w-full bg-white rounded-lg flex flex-col items-center p-3 md:p-4">            
    <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={img3} />
                <div className="flex gap-1">
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
</div>
              <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">K. Accessories</p>
              <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">25.00 TK</p>
            </div>



<div className="w-full bg-white rounded-lg flex flex-col items-center p-3 md:p-4">            
    <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={img4} />
               <div className="flex gap-1">
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
</div>
            <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">Home Cooker</p>
              <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">48.00 TK</p>
            </div>

          </div>
        </div>

        {/* for product category 2 */}
<div className="w-full text-[20px] font-bold">
         <h3>Sportswear</h3>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
<div className="w-full bg-white rounded-lg flex flex-col items-center p-3 md:p-4">             
   <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={img5} />
                <div className="flex gap-1">
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
</div>
             <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">Sports Black cap</p>
              <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">49.00 TK</p>
     </div>

<div className="w-full bg-white rounded-lg flex flex-col items-center p-3 md:p-4">             
   <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={img6} />
                <div className="flex gap-1">
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
</div>
              <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">Full Jersey Set</p>
              <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">69.00 TK</p>
        </div>

<div className="w-full bg-white rounded-lg flex flex-col items-center p-3 md:p-4">              
            <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={img7} />
                <div className="flex gap-1">
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
</div>
              <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">Sports cates</p>
              <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">159.00 TK</p>
         </div>

          </div>
        </div>

        {/* for product category 3 */}
<div className="w-full text-[20px] font-bold">
        <h3>Furniture</h3>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
<div className="w-full bg-white rounded-lg flex flex-col items-center p-4">        
        <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={img8} />
                <div className="flex gap-1">
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
</div>
              <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">Single Relax Chair</p>
              <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">185.00 TK</p>
        </div>

<div className="w-full bg-white rounded-lg flex flex-col items-center p-4">             
   <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={img9} />
                <div className="flex gap-1">
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
</div>
              <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">Children Play</p>
              <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">299.00 TK</p>
        </div>

<div className="w-full bg-white rounded-lg flex flex-col items-center p-4">       
         <img className="w-full h-[100px] md:h-[150px] object-contain bg-[#b8b2b2] rounded" src={img10} />
               <div className="flex gap-1">
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
               <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-500" />
</div>
             <p className="mt-2 text-center text-[12px] md:text-[14px] font-semibold">Flexible Sofa</p>
              <p className="mt-1 text-[12px] md:text-[14px] text-gray-500">339.00 TK</p>
        </div>

          </div>
        </div>
      </div>

      {/* Right side  */}
<div className="w-full lg:w-[400px] shrink-0">
        {/* for coupon  */}
      <div className="bg-white rounded-[8px] p-[20px] mb-[25px]">
          <h4>Have coupon?</h4>

        <div className="flex flex-col sm:flex-row mt-3">
  <input  className="flex-1 p-3 border border-[#ddd] sm:rounded-l-md rounded-md"  placeholder="Coupon Code"/>

  <button onClick={handleApply} className="bg-[#E527B2] text-white px-4 py-3 sm:rounded-r-md rounded-md mt-2 sm:mt-0">Apply</button>
</div>
        </div>

        {/* summary section */}
        <div className="bg-white rounded-[8px] p-[20px]">

          <div className="p-[10px] m-[15px]">
            <p>1. Home Cooker</p>
            <p>2. Sports cates</p>
            <p>3. Home Cooker</p>
          </div>

          <hr />

          <div className="p-[10px] rounded-[5px] mb-[15px]">
            <p>Total price: <span className="text-gray-500">257.00 TK</span></p>
            <p>Discount: <span className="text-gray-500">51.40 TK</span></p>
            <p>Total: <span className="text-gray-500">205.60 TK</span></p>
          </div>

          <hr />
{/* to purchase */}
          <button onClick={handlePurchase} className="w-full bg-[#E527B2] text-white p-[12px] rounded-[5px] font-bold">
            Make Purchase
          </button>

        </div>
         </div>
     </div>
     </div>
     {/* </div> */}
   </>
  );
 };

createRoot(document.getElementById('root')).render(
  <Header />
);
