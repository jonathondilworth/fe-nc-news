import React, { useEffect, useState } from 'react';
import { getArticleComments } from '../api';
import Comment from './Comment';
import Loading from './Loading';
import CommentForm from './CommentForm';
import { Fragment } from 'react'
import { ChatBubbleLeftEllipsisIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const ArticleComments = ({ article }) => {
    
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticleComments(article.article_id)
        .then((comments) => {
            setComments(comments);
            setIsLoading(false);
        });
    }, []);
    
    return ( 
        <>
        <CommentForm article={article} setComments={setComments}/>
        {isLoading ? <Loading /> : (
            <div className="flow-root">
            <ul role="list" className="-mb-8">
                {comments.map((comment, commentIdx) => (
                <li key={comment.comment_id}>
                    <div className="relative pb-8">
                        {commentIdx !== comments.length - 1 ? (
                            <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                        ) : null}
                        <Comment key={comment.comment_id} comment={comment} setComments={setComments} />
                    </div>
                </li>
                ))}
            </ul>
            </div>
        )}
        </>
    );

    // return (
    //     <>
    //     <CommentForm article={article} setComments={setComments}/>
    //     {isLoading ? <Loading /> : (
    //     <ul className='card-list'>
    //         {comments.map((comment) => (
    //             <Comment key={comment.comment_id} comment={comment} setComments={setComments} />
    //         ))}
    //     </ul>
    //     )}
    //     </>
    // );
};

export default ArticleComments;