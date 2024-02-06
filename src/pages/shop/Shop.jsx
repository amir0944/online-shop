import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Shop = ({ products }) => {
  return (
    <>
      <h1 className="text-center font-bold my-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
        {products.map((p) => (
          <Product key={p.id} p={p} />
        ))}
      </div>
    </>
  );
};

export default Shop;

export const Product = ({ p }) => {
  const { cartItem, AddCart, DeleteCart } = useContext(ShopContext);
  const countLenght = cartItem?.filter((item) => item.id == p.id)[0]?.count;
  return (
    <div className="flex-col text-center w-[90%] mx-auto h-max p-4 border-2 rounded-xl mb-2">
      <h1 className="font-bold mt-4">{p.Pname}</h1>
      <p className="text-slate-400 my-2">price :${p.Pprice}</p>
      <div className="flex items-center justify-center p-2 border-t ">
        <button
          className="p-1 bg-green-400 rounded-sm mt-2"
          onClick={() => AddCart(p.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <span className="px-2">
          {countLenght == 0 || !countLenght ? "0" : countLenght}
        </span>
        {countLenght ? (
          <BtnS DeleteCart={DeleteCart} id={p.id} />
        ) : (
          <BtnH DeleteCart={DeleteCart} id={p.id} />
        )}
      </div>
    </div>
  );
};

export const BtnS = ({ DeleteCart, id }) => (
  <button
    className="p-1 bg-green-400 rounded-sm mt-2"
    onClick={() => DeleteCart(id)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  </button>
);
export const BtnH = () => (
  <button
    disabled
    className="p-1 bg-green-400 rounded-sm mt-2"
    onClick={() => DeleteCart(p.id)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  </button>
);
