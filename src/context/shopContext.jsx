import { createContext, useState } from "react";

export const ShopContext = createContext(null);
export const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const AddCart = (id) => {
    if (!cartItem?.find((item) => item.id == id))
      setCartItem([...cartItem, { id: id, count: 1 }]);
    else
      setCartItem(
        cartItem.map((item) => {
          if (item.id == id) return { ...item, count: item.count + 1 };
          else return item;
        })
      );
  };
  const DeleteCart = (id) => {
    setCartItem(
      cartItem.map((item) => {
        if (item.id == id) return { ...item, count: item.count - 1 };
        else return item;
      })
    );
  };
  const contextValu = { cartItem, AddCart, DeleteCart };
  return (
    <ShopContext.Provider value={contextValu}>
      {props.children}
    </ShopContext.Provider>
  );
};
