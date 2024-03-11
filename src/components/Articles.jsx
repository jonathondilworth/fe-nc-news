import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import ArticleList from './ArticleList';
import { getArticles } from '../api';
import Loading from './Loading';

const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        topic: null,
        sortBy: null,
        orderBy: null
    });

    useEffect(() => {
        setIsLoading(true);
        getArticles(filters.topic, filters.sortBy, filters.orderBy)
        .then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, [filters]);

    return (
        <div className='container'>
            <h1>Articles!</h1>
            <Filters setFilters={setFilters} />
            { isLoading ? <Loading /> : <ArticleList articles={articles} /> }
        </div>
    );
};

export default Articles;