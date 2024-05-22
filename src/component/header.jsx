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
            <h1 style={titleStyle}>This is the Header</h1>
            
        </div>
    </header>
  );
};

export default Header;
