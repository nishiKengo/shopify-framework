import React from 'react';

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
            <h1 style={titleStyle}>This is is the Header</h1>
            <p>test test</p>
            <div>test</div>
        </div>
    </header>
  );
};

export default Header;
