import { useState } from "react";
import { useCounterState, useCart } from "../../context/state";
import "./CartItem.css";
import { FaPlusSquare, FaMinusSquare, FaTrashAlt } from "react-icons/fa";

const CartItem = (product) => {
  const { removeFromCart } = useState(useCart);
  const { increaseCounter, decreaseCounter } = useState(useCounterState);

  return (
    <div>
      <div className="cart-main">
        <hr />
        <div className="cart-items">
          <div className="cart-detail">
            <div>{product.image}</div>
            <div>{product.title}</div>
            <div>{product.price}</div>
          </div>
          <div className="cart-quty-add">
            <div>{product.quantity}</div>
            {/* <div>{product.total}</div> */}
            <div className="cart-increase-decrease">
              <button onClick={() => increaseCounter(product)} className="btn-increase">
                <FaPlusSquare />
              </button>
              <button onClick={() => decreaseCounter(product)} className="">
                <FaMinusSquare />
              </button>
            </div>
            <div className="cart-remove">
              <button
                onClick={() => removeFromCart(product)}
                className="trash"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
