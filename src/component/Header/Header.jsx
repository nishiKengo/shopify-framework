import React from 'react';
import './header.css';
import CartComponent from './CartComponent';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '1em',
  };

  const titleStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
        <div className="header-inner">
            <div className="header-left">
              <a href="/">
                <h1 style={titleStyle}>Logo</h1>
              </a>
            </div>
            <div className="header-right">
              <ul>
                <li>
                  <a href="/">トップへ</a>
                </li>
                <li>
                  <a href="/collections/all">商品一覧</a>
                </li>
                <li>
                  <a href="/cart">
                    <CartComponent/>
                  </a>
                </li>
                <li>
                  <a href="/pages/contact">お問い合わせ</a>
                </li>
              </ul>
            </div>
        </div>
    </header>
  );
};

export default Header;
