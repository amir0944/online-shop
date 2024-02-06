import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Product } from "../shop/Shop";

const Cart = ({ products }) => {
  const { cartItem } = useContext(ShopContext);
  return (
    <>
      <h1 className="text-center font-bold my-4 border-b pb-2 mb-2">
        Your Cart Items
      </h1>
      {cartItem.length == 0 ? (
        <h1 className="text-center font-bold">there is no cart</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
          {products.map((p) => {
            if (cartItem.some((item) => item.id == p.id && item.count > 0))
              return <Product key={p.id} p={p} />;
          })}
        </div>
      )}
    </>
  );
};

export default Cart;
