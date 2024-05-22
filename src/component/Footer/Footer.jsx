import React from 'react';
import './footer.css';

const Footer = () => {
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
    <footer style={headerStyle}>
      <div className="footer-inner">
        <div className="footer-left">
          <a href="/">
            Footer-Logo
          </a>
        </div>
        <div className='footer-right'>
            <ul>
              <li>
                <a href="/">
                  トップへ
                </a>
              </li>
              <li>
                <a href="/collections/all">
                  商品一覧
                </a>
              </li>
              <li>
                <a href="/pages/contact">
                  お問い合わせ
                </a>
              </li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
