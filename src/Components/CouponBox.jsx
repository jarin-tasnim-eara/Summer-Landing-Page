

//    Right side  
  const CouponBox =({coupon,setCoupon,handleApply})=>{
  return(

        //  for coupon  
      <div className="bg-white rounded-[8px] p-[20px] mb-[25px]">
          <h4>Have coupon?</h4>

        <div className="flex flex-col sm:flex-row mt-3">
  <input   value={coupon} onChange={(e)=> setCoupon(e.target.value)} className="flex-1 p-3 border border-[#ddd] sm:rounded-l-md rounded-md"  placeholder="Coupon Code"/>

  <button onClick={handleApply} className="bg-[#E527B2] text-white px-4 py-3 sm:rounded-r-md rounded-md mt-2 sm:mt-0">Apply</button>
</div>
        </div>
  );
};

export default CouponBox;