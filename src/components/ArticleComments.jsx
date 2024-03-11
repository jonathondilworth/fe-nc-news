import React, { useEffect, useState } from 'react';
import { getArticleComments } from '../api';
import Comment from './Comment';
import Loading from './Loading';

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
    
    return isLoading ? <Loading /> : (
        <ul className='card-list'>
            {comments.map((comment) => (
                <Comment key={comment.comment_id} comment={comment} />
            ))}
        </ul>
    );
};

export default ArticleComments;