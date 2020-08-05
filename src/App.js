import React, { useState, useEffect } from 'react';
import Post from './Post';
import './App.css';
import { db } from './firebase';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    });
  }, []);
  const signUp = (event) => {

  }

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form>
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/"
                alt=""
              />
            </center>
            <Input
              type="text"
              placeholder="username"
              vlaue={username}
              onChange={(e) => setUsername(e.target.vlaue)}
            />
            <Input
              type="text"
              placeholder="email"
              vlaue={username}
              onChange={(e) => setEmail(e.target.vlaue)}
            />
            <Input
              type="password"
              placeholder="password"
              vlaue={username}
              onChange={(e) => setPassword(e.target.vlaue)}
            />
            <Button onClick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      {
        // odje je vazno ako dodamo id on ce samo da doda novi post nece da refresuje ostale a 
        // ako ostavimo da je bez id tj key on ce stalno da refresuje ostale postoce koje smo loopvali
        posts.map(({ post, id }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
