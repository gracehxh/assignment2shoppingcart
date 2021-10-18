import { useCallback } from 'react';
import Cart from '../icons/Cart';

const Product = ({ product, handleAddItemToCart, history }) => {
    const { id, title, image, price } = product;
    
    const goToProductDetails = useCallback(() => history.push(`/product/${id}`), [history]);

    return (
        <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <div>
                <img class="cursor-pointer hover:grow hover:shadow-lg" src={image} alt={title} onClick={goToProductDetails}/>
                <div class="pt-3 flex items-center justify-between">
                    <p class="cursor-pointer" onClick={goToProductDetails}>{title}</p>
                    <div class="cursor-pointer w-25 h-25 bg-indigo-600 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={() => handleAddItemToCart(product)}>
                        <Cart color="white"/>
                    </div>
                </div>
                <p class="cursor-pointer pt-1 text-gray-900" onClick={goToProductDetails}>${price}</p>
            </div>
        </div>
    )
}

export default Product;