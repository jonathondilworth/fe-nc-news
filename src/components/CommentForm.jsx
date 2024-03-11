import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { postNewComment } from '../api';
import Loading from './Loading';

const CommentForm = ({ article, setNewComment }) => {

    const { currentUser } = useContext(UserContext);

    const [newCommentInput, setNewCommentInput] = useState("");
    const [newCommentInputError, setNewCommentInputError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleNewCommentChange = (event) => {
        setNewCommentInput(event.target.value);
        if (!validateNewComment(event.target.value)) {
            setNewCommentInputError("This field is required");
        } else {
            setNewCommentInputError(null);
        }
    }

    const validateNewComment = (value) => {
        return value.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateNewComment(newCommentInput)) {
            alert("You cannot submit an empty comment");
            return;
        }
        setIsLoading(true);
        postNewComment(article.article_id, currentUser, newCommentInput)
        .then((comment) => {
            alert("New Comment Added!");
            // triggers a re-render in ArticleComments.jsx
            setNewComment({
                username: currentUser,
                body: newCommentInput
            });
            setNewCommentInput("");
            setIsLoading(false);
        });
    }

    return isLoading ? <Loading /> : (
        <form onSubmit={handleSubmit}>
            <label htmlFor='new-comment'>
            <input type="text" id="new-comment" value={newCommentInput} onChange={handleNewCommentChange} />
            {newCommentInputError ? <span style={{"color": "red", "fontSize": "small"}}>{newCommentInputError}</span> : ''}
            </label>
            <button type='submit'>Add Comment</button>
        </form>
    );
};

export default CommentForm;