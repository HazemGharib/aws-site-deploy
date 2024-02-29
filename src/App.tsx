import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
          <span className="site-name">My Site</span>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to my site</h1>
        <p>This is a static site template</p>
        <p>Deploy your site with a simple push to GitHub</p>
      </div>
    </div>
  );
}

export default App;
