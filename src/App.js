import React from 'react';
import Post from './Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>
      <Post />
    </div>
  );
}

export default App;
