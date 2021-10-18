import { useState } from 'react';

const CartSummary = ({ totalItems, totalPrice }) => {

  const shippingOptions = [
    {
      id: 1,
      option: 'Standard',
      price: 10
    },
    {
      id: 2,
      option: 'Express',
      price: 20
    },
    {
      id: 3,
      option: 'Priority',
      price: 30
    }
  ];

  const [shippingOption, setShippingOption ] = useState(shippingOptions[0].id)

  const getShippingOption = (e) => setShippingOption(parseInt(e.target.value))
  
  const totalCost = (Number(totalPrice) + shippingOptions.find(option => option.id === shippingOption).price).toFixed(2)

  
  return (
    <div id="summary" class="w-1/4 px-8 py-10">
      <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">Total items: {totalItems}</span>
        <span class="font-semibold text-sm">${totalPrice}</span>
      </div>
      <div>
        <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
        <select onChange={getShippingOption} class="block p-2 text-gray-600 w-full text-sm">
          {shippingOptions.map(option => (
            <option key={option.id} value={option.id}>{option.option} - ${option.price}</option>
          ))}
        </select>
      </div>
      {/* <div class="py-10">
        <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
        <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
      </div>
      <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button> */}
      <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${totalCost}</span>
        </div>
        <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
      </div>
    </div>

  )
}

export default CartSummary;