import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (med) => {
    setCartItems((prev) => {
      const isExist = prev.find((item) => item.id === med.id);
      if (isExist) {
        const updatedCart = prev.map((item)=>{
          if(item.id === med.id){
            return {...item,cartQuantity:item.cartQuantity+1}
          }
          return item;
          alert('Item added in cart')
        });
     return updatedCart;
      } else {
        alert('item added in cart')
        return [...prev, { ...med, cartQuantity: 1}];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
