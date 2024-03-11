import React, { useEffect, useState } from 'react';
import { getArticle, patchArticleVotes } from '../api';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';
import ArticleComments from './ArticleComments';
import CommentForm from './CommentForm';

const Article = () => {
    
    const { id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [votes, setVotes] = useState(0);
    const [newComment, setNewComment] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getArticle(id)
        .then((article) => {
            setArticle(article);
            setVotes(article.votes);
            setIsLoading(false);
        })
    }, []);
    
    const handleUpvote = () => {
        setVotes((currVotes) => {
            return currVotes + 1;
        });
        // J.D: TODO: More appropriate handle any errors? Alternatively: fire & forget (remove catch)
        patchArticleVotes(article.article_id, 1)
        .catch((err) => {
            alert("Oh noes, failed to upvote!")
        });
    }

    const handleDownvote = () => {
        setVotes((currVotes) => {
            return currVotes - 1;
        });
        patchArticleVotes(article.article_id, -1)
        .catch((err) => {
            alert("Oh noes, failed to downvote!")
        });
    }

    // J.D: This is pretty messy, TODO: clean this up & consider styling these components later
    
    return isLoading ? <Loading /> : (
        <div className='container'>
            <h1>Article!</h1>
            <h2>{ article.title }</h2>
            <img src={article.article_img_url} />
            <p>{ article.body }</p>
            <p>Topic: { article.topic }</p>
            <span>Votes: { votes }</span>
            <button onClick={handleUpvote}>Upvote</button>
            <button onClick={handleDownvote}>Downvote</button>
            <p>Written by: { article.author }</p>
            <p>Posted at: { article.created_at }</p>
            <p><Link to={`/articles`}>Go Back To Articles</Link></p>
            <h3>Comments</h3>
            <CommentForm article={article} setNewComment={setNewComment}/>
            <ArticleComments article={article} newComment={newComment} />
        </div>
    );
};

export default Article;