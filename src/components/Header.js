import { useHistory } from 'react-router-dom';
import Cart from './icons/Cart';

const Header = ({ getTotalItems }) => {
    let history = useHistory();

    const goTo = (path) => history.push(path)
    
    // const goTo = useCallback((path) => () => history.push(path), [history])

    return (
        <nav id="header" class="w-full z-30 top-0 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
    
                <div onClick={() => goTo('/')} class="cursor-pointer order-1 md:order-2">
                    <div class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                        <svg class="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                        </svg>
                        Shopping cart
                    </div>
                </div>
    
                <div class="order-2 md:order-3 flex items-center" id="nav-content">
    
                    <div class="cursor-pointer pl-3 inline-block no-underline hover:text-black" onClick={() => goTo('/cart')}>
                        <span class="relative inline-block">
                            <Cart/>
                            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{getTotalItems}</span>
                        </span>
                    </div>
    
                </div>
            </div>
        </nav>
    )
}

export default Header;