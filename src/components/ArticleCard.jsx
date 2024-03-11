import React from 'react';

const ArticleCard = ({ article }) => {
    return (
        <li className='card'>
            <p>Title: {article.title}</p>
            <p>Topic: {article.topic}</p>
            <p>Comment Count: {article.comment_count}</p>
            <p>Author: {article.author}</p>
            <p>Created At: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
        </li>
    );
};

export default ArticleCard;