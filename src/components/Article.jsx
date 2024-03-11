import React, { useEffect, useState } from 'react';
import { getArticle } from '../api';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';

const Article = () => {
    
    const { id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticle(id)
        .then((article) => {
            setArticle(article);
            setIsLoading(false);
        })
    }, []);
    
    return isLoading ? <Loading /> : (
        <div className='container'>
            <h1>Article!</h1>
            <h2>{ article.title }</h2>
            <img src={article.article_img_url} />
            <p>{ article.body }</p>
            <p>Topic: { article.topic }</p>
            <span>Votes: { article.votes }</span>
            { /* TODO: add upvote & downvote functionality in later ticket */ }
            <button>Upvote</button>
            <button>Downvote</button>
            { /* END TODO */ }
            <p>Written by: { article.author }</p>
            <p>Posted at: { article.created_at }</p>
            <p><Link to={`/articles`}>Go Back To Articles</Link></p>
        </div>
    );
};

export default Article;