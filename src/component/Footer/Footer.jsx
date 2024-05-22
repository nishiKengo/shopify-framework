import React from 'react';

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
            Footer-Test
        </div>
        <div>
            Footer-Test
        </div>
    </footer>
  );
};

export default Footer;
