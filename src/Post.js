import React, { useState, useEffect } from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';

function Post({ postId, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        let unsubsribe;
        if (postId) {
            unsubsribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                })
        }
        return () => {
            unsubsribe();
        };

    }, [postId]);
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="Semir Cohovic"
                    src="/static/images/avatar/1.png"
                />
                <h2>{username}</h2>
            </div>
            <img className="post__image" src={imageUrl} />

            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>

        </div>
    )
}

export default Post
