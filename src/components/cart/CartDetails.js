import CartProduct from "./CartProduct";

const CartDetails = ({ cartItems, handleAddItemToCart, handleRemoveItemFromCart, totalItems }) => {

  return (

    <div class="w-3/4 bg-white px-10 py-10">
      <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-2xl">Shopping Cart</h1>
        <h2 class="font-semibold text-2xl">{totalItems} Item(s)</h2>
      </div>
      {totalItems === 0 ? (
          <h3>No products in cart, please continue shopping</h3>
      ) : (
        <div>
          <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          {cartItems.map(product => (
            <CartProduct key={product.id} product={product} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
          ))}
        </div>
      )}
    </div>
  )

}

export default CartDetails;