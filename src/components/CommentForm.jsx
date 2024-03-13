import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { postNewComment } from '../api';
import Loading from './Loading';

const CommentForm = ({ article, setComments }) => {

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
            setComments((currComments) => {
                const updatedComments = [...currComments];
                updatedComments.unshift(comment);
                return updatedComments;
            });
            setNewCommentInput("");
            setIsLoading(false);
        });
    }

    return (
        <>
        <div className="mt-6 mb-6 flex gap-x-3">
        <form onSubmit={handleSubmit} className="relative flex-auto">
        <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label htmlFor="comment" className="sr-only">
            Add your comment
            </label>
            <textarea
            rows={2}
            name="comment"
            id="comment"
            className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Add your comment..."
            value={newCommentInput}
            onChange={handleNewCommentChange}
            disabled={isLoading}
            />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
                {newCommentInputError ? <span style={{"color": "red", "fontSize": "small"}}>{newCommentInputError}</span> : ''}
            </div>
            <button
            type="submit"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            disabled={isLoading}
            >
            { isLoading ? 'Loading...' : 'Comment'}
            </button>
        </div>
        </form>
        </div>
        </>
    );

    // return isLoading ? <Loading /> : (
    //     <form onSubmit={handleSubmit}>
    //         <label htmlFor='new-comment'>
    //         <input type="text" id="new-comment" value={newCommentInput} onChange={handleNewCommentChange} />
    //         {newCommentInputError ? <span style={{"color": "red", "fontSize": "small"}}>{newCommentInputError}</span> : ''}
    //         </label>
    //         <button type='submit'>Add Comment</button>
    //     </form>
    // );
};

export default CommentForm;