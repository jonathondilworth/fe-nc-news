import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import Loading from './Loading';
import { deleteComment } from '../api';
import { ChatBubbleLeftEllipsisIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { FaceFrownIcon } from '@heroicons/react/20/solid'

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
        <div className="relative flex items-start space-x-3">
            <div className="relative">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                    <UserCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </div>
                <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                    <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
            </div>
            <div className="min-w-0 flex-1">
                <div>
                    <div className="text-sm">
                        <a href="#" className="font-medium text-gray-900">
                            {comment.author}
                        </a>
                    </div>
                <p className="mt-0.5 text-sm text-gray-500">Commented on {comment.created_at.split('T')[0]}</p>
            </div>
                <div className="mt-2 text-sm text-gray-700">
                    <p>{comment.body}</p>
                </div>
            </div>
            { comment.author === currentUser ? (
                <button
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-md bg-red-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    onClick={handleDelete}
                    disabled={isLoading}
                >
                    <FaceFrownIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    { isLoading ? 'Loading...' : 'Delete' }
                </button>
            ) : '' }
        </div>
    );

    // return (
    //     <li className='card'>
    //         <p>User: {comment.author} </p>
    //         <p>{comment.body}</p>
    //         { comment.author === currentUser ? (
    //             isLoading ? <Loading /> : <button onClick={handleDelete}>Delete</button>
    //         ) : '' }
    //     </li>
    // );
};

export default Comment;