const CartProduct = ({ product, handleAddItemToCart, handleRemoveItemFromCart }) => {
  const { id, title, price , image, amount } = product;
  const total = price * amount;
  
  return (

    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div class="flex w-2/5"> 
        <div class="w-20">
          <img class="h-24" src={image} alt={title}/>
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-bold text-sm">{title}</span>
          {/* <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a> */}
        </div>
      </div>
      <div class="flex justify-center w-1/5">
        <button onClick={() => handleRemoveItemFromCart(id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          -
        </button>
        <span class="text-center w-1/5 font-semibold text-sm">{amount}</span>
        <button onClick={() => handleAddItemToCart(product)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          +
        </button>
      </div>
      <span class="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span class="text-center w-1/5 font-semibold text-sm">${total}</span>
    </div>
  )
}

export default CartProduct;