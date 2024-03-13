import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import { getArticles } from '../api';
import ArticleList from './ArticleList';
import Error from './Error';

const Topics = () => {

    const { topic } = useParams();

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({
        triggered: false,
        error: null,
        err: null
    });

    const resetError = () => {
        setError({
            triggered: false,
            error: null,
            err: null
        });
    }

    useEffect(() => {
        resetError();
        setIsLoading(true);
        getArticles(topic)
        .then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        })
        .catch((res) => {
            setError({
                triggered: true,
                error: res.message,
                err: res
            });
        });
    }, [topic]);

    // J.D: inline styles in this component are temporary until I get on to the styling task
    // I just wanted the colours and layout to be a bit different from the main nav for now

    return error.triggered ? (
        <Error error={error} />
    ) : (
        <>
        <div className='container'>
            <div className='nav' style={{maxWidth: '768', justifyContent: 'center', backgroundColor: 'white'}}>
                <div className='nav-link' style={{marginLeft: '50px'}}><Link style={{color: '#133337'}} to='/topics'>All</Link></div>
                <div className='nav-link'><Link style={{color: '#133337'}} to='/topics/coding'>Coding</Link></div>
                <div className='nav-link'><Link style={{color: '#133337'}} to='/topics/cooking'>Cooking</Link></div>
                <div className='nav-link'><Link style={{color: '#133337'}} to='/topics/football'>Football</Link></div>
            </div>
            {isLoading ? <Loading /> : <ArticleList articles={articles} />}
        </div>
        </>
    );
};

export default Topics;