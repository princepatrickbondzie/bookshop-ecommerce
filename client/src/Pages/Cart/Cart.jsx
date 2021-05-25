import { useState } from "react";
import { useCart } from "../../context/state";
import CartItem from "./CartItem";

const Cart = (product) => {
   const { totalPrice, cartProducts } = useState(useCart);
// const { cartItems } = useState();

  return (
    <div className="carts added">
      <div className="cart cart-body">
        {cartProducts.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div>Total:Ghc{totalPrice}</div>
    </div>
  );
};

export default Cart;