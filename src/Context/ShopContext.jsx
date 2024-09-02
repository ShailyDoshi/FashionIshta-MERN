import { createContext, useState } from "react";
import all_products from "../assets/all_products";
import Product from "../Pages/Product";

export const ShopContext = createContext(null);
const getDefaultCart = ()=> {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
    
  }
  return cart;
}
const ShopContextProvider = (props) => {
  const [cartItems,setCartIems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartIems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems);
  }
const removeFromCart = (itemId) => {
  setCartIems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
}
  const contextValue = { all_products, cartItems,addToCart,removeFromCart};
  return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
 const getTotalCartAmount=()=>{

  let totalAmount =0;
  for(const item in cartItems)
  {
    if(cartItems[item] >0)
    {
      let iteminfo=all_products.find((product)=>product.id ===Number(item));
      totalAmount += iteminfo.new_price*cartItems[item];

    }
    return totalAmount;
  }


 const contextValue={getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart};
 return(
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
 )
}
export default ShopContextProvider;
