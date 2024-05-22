// CartComponent.jsx

import React, { useEffect, useState } from 'react';

const CartComponent = () => {
  const [cart, setCart] = useState(null);
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    if (window.cartData) {
      setCart(window.cartData.cart);
      setTranslations(window.cartData.translations);
    }
  }, []);

  if (!cart) {
    return null; // ローディング状態や空のコンポーネントを返す
  }

  return (
    <div style={{position: "relative"}}>
      {cart.item_count === 0 ? (
        <div className="icon-cart-empty">Empty Cart Icon</div>
      ) : (
        <div className="icon-cart">Cart Icon</div>
      )}
      <span className="visually-hidden">{translations.cart}</span>
      {cart.item_count !== 0 && (
        <div className="cart-count-bubble">
          {cart.item_count < 100 && <span aria-hidden="true">{cart.item_count}</span>}
          <span className="visually-hidden">
            {translations.cart_count.replace('__COUNT__', cart.item_count)}
          </span>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
