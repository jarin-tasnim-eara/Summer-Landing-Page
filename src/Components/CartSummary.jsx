const CartSummary = ({cart,totalPrice,discountAmount,finalAmount,handlePurchase})=>{
  return(
//   summary section 
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
    <p>Total price:<span className="text-gray-500">{totalPrice.toFixed(2)}TK</span></p>
    <p>Discount:<span className="text-gray-500">{discountAmount.toFixed(2)}TK</span></p>
    <p>Final Total:<span className="text-gray-500">{finalAmount.toFixed(2)}TK</span></p>
  </div>

  <hr />

  <button onClick={handlePurchase} className="w-full bg-[#E527B2] text-white p-[12px] rounded-[5px] font-bold">
    Make Purchase
  </button>

</div>
    );
};

export default CartSummary;