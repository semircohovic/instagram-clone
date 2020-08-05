import React, {useState} from 'react';
import Post from './Post';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'semircohovic',
      caption: "Wow it works",
      imageUrl: "https://fikrabd.com/sites/default/files/web-development.jpg"

    }, {
      username :"mersiha",
      caption: "Chilling",
      imageUrl :"https://thumbs.dreamstime.com/b/boy-watching-movie-home-boy-watching-movie-home-illustration-relaxed-man-sitting-big-room-front-modern-television-153246274.jpg"
    }, {
      username: "milovan",
      caption: "Lezanija",
      imageUrl: "https://www.wallpaperflare.com/static/552/968/15/women-brunette-closed-eyes-face-wallpaper.jpg"
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
