// CartComponent.jsx
import React, { useEffect, useState } from 'react';
import './header.css'

const CartComponent = () => {
  const [cart, setCart] = useState(null);
  const [translations, setTranslations] = useState({});
  const [iconCart, setIconCart] = useState('')
  const [iconCartEmpty, setIconCartEmpty] = useState('')

useEffect(() => {
    if (window.cartData) {
    setCart(window.cartData.cart);
    setTranslations(window.cartData.translations);
    setIconCart(window.cartData.iconCart);
    setIconCartEmpty(window.cartData.iconCartEmpty);
    }

    // カート更新イベントをリッスン
    const handleCartUpdate = (event) => {
        const { cartData } = event.detail;
        setCart(cartData);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    // クリーンアップ
    return () => {
        window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  if (!cart) {
    return null; // ローディング状態や空のコンポーネントを返す
  }

  return (
    <div style={{position: "relative"}}>
      {cart.item_count === 0 ? (
        //レンダリングされたLiquidスニペットを挿入する
        <div className="icon-cart" dangerouslySetInnerHTML={{ __html: iconCartEmpty }}></div>
      ) : (
        //レンダリングされたLiquidスニペットを挿入する
        <div className="icon-cart" dangerouslySetInnerHTML={{ __html: iconCart }}></div>
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
