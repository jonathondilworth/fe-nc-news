import React, { useEffect, useState } from 'react';
import ArticleList from './ArticleList';
import { getArticles } from '../api';
import Loading from './Loading';

const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticles()
        .then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className='container'>
            <h1>Articles!</h1>
            { isLoading ? <Loading /> : <ArticleList articles={articles} /> }
        </div>
    );
};

export default Articles;