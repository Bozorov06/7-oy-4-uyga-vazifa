import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../lib/slices/cartSlice";
import savat from '../assets/savat.svg'

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto p-5">
      <span className="text-3xl font-bold mb-5 inline-block">
        Savatcha
        <img className=" inline-block ml-4" src={savat} alt="" />
      </span>

      {cartItems.length === 0 ? (
        <p className=" text-3xl text-fuchsia-500 font-black">Savatcha bo'sh!</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className=" border-2 p-2 rounded-md shadow-2xl flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold text-center text-blue-500">
                  {item.title}
                </h3>
                <p className="text-primary text-amber-600 text-2xl font-black">{item.price} ₽</p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  O'chirish
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-2xl font-semibold text-cyan-800">
            Jami: {totalPrice.toLocaleString()} ₽
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
