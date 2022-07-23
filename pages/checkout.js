import Cart from "../components/Cart";
import { useStateContext } from "../context/StateContext";
import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { urlFor } from "../lib/client";
import Router, { useRouter } from "next/router";
import { route } from "next/dist/server/router";

const Checkout = () => {
  const { cartItems } = useStateContext();
  const router = useRouter();

  const handlePay = (e) => {
    e.preventDefault();
    router.push("/success");
  };

  return (
    <form className="checkout-page">
      <div className="checkout-left">
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img
                src={urlFor(item?.image[0])}
                className="cart-product-image"
              />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span
                        className="minus"
                        onClick={() => toggleCartItemQuanitity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">
                        {item.quantity}
                      </span>
                      <span
                        className="plus"
                        onClick={() => toggleCartItemQuanitity(item._id, "inc")}
                      >
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="checkout-right">
        <div className="checkout-wrapper">
          <div className="checkout-container">
            <p className="checkout-pay">Pay with card</p>
            <input
              placeholder="Email"
              className="checkout-input"
              type="email"
            />
            <input placeholder="Card number" className="checkout-input" />

            <input
              placeholder="Name on card"
              className="checkout-input"
              type="text"
            />
            <input placeholder="Country of region" className="checkout-input" />
            <button className="checkout-button" onClick={handlePay}>
              Pay
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
