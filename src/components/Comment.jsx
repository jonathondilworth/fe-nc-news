import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import Loading from './Loading';
import { deleteComment } from '../api';

const Comment = ({ comment, setComments }) => {
    
    const { currentUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = () => {
        setIsLoading(true);
        deleteComment(comment.comment_id)
        .then((success) => {
            setComments((currComments) => {
                return currComments.filter((existingComment) => {
                    return existingComment.comment_id !== comment.comment_id
                });
            });
            alert("Deleted comment!");
            setIsLoading(false);
        })
        .catch((err) => {
            alert("Failed to delete comment.");
            setIsLoading(false);
        });
    }

    return (
        <li className='card'>
            <p>User: {comment.author} </p>
            <p>{comment.body}</p>
            { comment.author === currentUser ? (
                isLoading ? <Loading /> : <button onClick={handleDelete}>Delete</button>
            ) : '' }
        </li>
    );
};

export default Comment;