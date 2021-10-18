import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Loader from "./icons/Loader";
import GoTo from './GoTo';
import PageHeader from './PageHeader';
import StarRating from './icons/StarRating';
import Cart from './icons/Cart';

const getProduct = async ({ queryKey }) => {
    const [_, id] = queryKey;
    return await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();
}

const ProductDetails = ({ handleAddItemToCart }) => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["product", id], getProduct);

  if (isLoading) return <Loader/>;
  if (error) return error.message;
  
  const { title, image, description, price, rating } = data;
  const { rate, count } = rating;
  
  return (
    <div class="container px-5 py-15 mx-auto">
      <GoTo/>
      <PageHeader menu="Product Information"/>
      <div class="lg:w-2/3 mx-auto flex flex-wrap">
        <img alt={title} class="w-full object-cover object-center" src={image}/>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <StarRating rate={rate}/>
              <span class="text-gray-600 ml-3">{count} Reviews</span>
            </span>
          </div>
          <p class="leading-relaxed">{description}</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"/>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">${price}</span>
            <button onClick={() => handleAddItemToCart(data)} class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              <Cart/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;