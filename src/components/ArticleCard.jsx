import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
    return (
        <li className='card'>
            
            <p><Link to={`/article/${article.article_id}`}>Title: {article.title}</Link></p>
            <p>Topic: {article.topic}</p>
            <p>Comment Count: {article.comment_count}</p>
            <p>Author: {article.author}</p>
            <p>Created At: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
        </li>
    );
};

export default ArticleCard;