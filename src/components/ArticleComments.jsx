import React, { useEffect, useState } from 'react';
import { getArticleComments } from '../api';
import Comment from './Comment';

const ArticleComments = ({ article }) => {
    
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getArticleComments(article.article_id)
        .then((comments) => {
            setComments(comments);
        });
    }, []);
    
    return (
        <ul className='card-list'>
            {comments.map((comment) => (
                <Comment key={comment.comment_id} comment={comment} />
            ))}
        </ul>
    );
};

export default ArticleComments;