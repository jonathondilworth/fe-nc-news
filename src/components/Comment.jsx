import React from 'react';

const Comment = ({ comment }) => {
    return (
        <li className='card'>
            <p>User: {comment.author} </p>
            <p>{comment.body}</p>
        </li>
    );
};

export default Comment;