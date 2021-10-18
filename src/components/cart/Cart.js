import CartSummary from "./CartSummary";
import CartDetails from "./CartDetails";
import GoTo from "../GoTo";

const Cart = ({ cartItems, handleAddItemToCart, handleRemoveItemFromCart, totalItems }) => {

  const totalPrice = cartItems.reduce(
    (sum, i) => sum + i.amount * i.price,
    0
  );
  
  return (
    <div>
      <GoTo/>
      <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <CartDetails cartItems={cartItems} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} totalItems={totalItems}/>
          {totalItems > 0 && (
            <CartSummary totalItems={totalItems} totalPrice={parseFloat(totalPrice.toFixed(2))}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart;