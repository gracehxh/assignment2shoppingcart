import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Header from './components/Header';
import Products from './components/productsListing/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/cart/Cart';
import "./custom.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const getTotalItems = (cartItems) =>
    cartItems.reduce((acum, i) => acum + i.amount, 0);

  const handleAddItemToCart = (item) => {
    setCartItems((prev) => {
      // Search the item in the array
      const isItemInTheCart = prev.find((i) => i.id === item.id);
      if (isItemInTheCart) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      }
      return [...prev, { ...item, amount: 1 }];
    });
  };

  const handleRemoveItemFromCart = (id) => {
    setCartItems((prev) => {
      const foundItem = prev.find((i) => i.id === id);
      if (foundItem) {
        if (foundItem.amount === 1) {
          const newArray = prev.filter((i) => i.id !== id);
          return newArray;
        } else {
          return prev.map((i) =>
            i.id === id ? { ...i, amount: i.amount - 1 } : i
          );
        }
      } else {
        return prev;
      }
    });
  };
  
  return (
    <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <BrowserRouter>
        <Header getTotalItems={getTotalItems(cartItems)}/>
        <section class="bg-white py-8">
          <Switch>
            <Route exact path="/" render={props => <Products {...props} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}/>
            <Route path="/product/:id" render={props => <ProductDetails {...props} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}/>
            <Route path="/cart" render={props => <Cart {...props} cartItems={cartItems} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} totalItems={getTotalItems(cartItems)}/>}/>
          </Switch>
        </section>
      </BrowserRouter>
    </div>
  );
};
export default App;