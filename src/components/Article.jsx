import React, { useEffect, useState } from 'react';
import { getArticle, patchArticleVotes } from '../api';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';
import ArticleComments from './ArticleComments';
import CommentForm from './CommentForm';
import { CheckCircleIcon, InformationCircleIcon, ArrowUpCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/20/solid'
import Error from './Error';

const Article = () => {
    
    const { id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [votes, setVotes] = useState(0);
    const [error, setError] = useState({
        triggered: false,
        error: null,
        err: null
    });
    const [hasVoted, setHasVoted] = useState(false);

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
        getArticle(id)
        .then((article) => {
            setArticle(article);
            setVotes(article.votes);
            setIsLoading(false);
        })
        .catch((res) => {
            setError({
                triggered: true,
                error: res.message,
                err: res
            });
        });
    }, []);
    
    const handleUpvote = () => {
        setVotes((currVotes) => {
            return currVotes + 1;
        });
        setHasVoted(true);
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
        setHasVoted(true);
        patchArticleVotes(article.article_id, -1)
        .catch((err) => {
            alert("Oh noes, failed to downvote!")
        });
    }

    // J.D: This is pretty messy, TODO: clean this up & consider styling these components later
    // J.D: JS & JSX just feels messy, I'm not exactly sure what I could do to clean this up :(
    // TODO: learn TypeScript (maybe?) probably looks even messier with loads of generic types?
    // TODO: adopt a better technology xD
    
    const stats = [
        { id: 1, name: 'Votes', value: votes },
        { id: 2, name: 'Wrote this article', value: article.author },
        { id: 3, name: 'Was posted on', value: article.created_at?.split('T')[0] }
    ];
      
    return error.triggered ? (
        // <>
        //     <h2>Something went wrong...</h2>
        //     <p>{ error.error }</p>
        //     <Link to='/articles'>Go back to all articles.</Link>
        // </>
        <Error error={error} />
    ) : isLoading ? <Loading /> : (
        <div className="bg-white px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-indigo-600">{ article.topic }</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ article.title }</h1>
            <p className="mt-6 text-xl leading-8">
            { article.body?.split('.')?.slice(0, 2)?.join('.') }
            </p>
            <figure className="mt-16">
                <img
                    className="aspect-video rounded-xl bg-gray-50 object-cover"
                    src={article.article_img_url}
                    alt=""
                />
            </figure>
            <div className="mt-10 max-w-2xl">
              <p>
                { article.body?.split('.')?.slice(2)?.join('.') }
              </p>
              
              <div className="bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-8 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                        <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                            {stat.value}
                        </dd>
                        </div>
                    ))}
                    </dl>
                </div>
              </div>
        
            <div className='flex justify-center gap-x-2'>

                <button
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:bg-slate-50 disabled:text-slate-500"
                    onClick={handleUpvote}
                    disabled={hasVoted}
                >
                    <ArrowUpCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Upvote
                </button>

                <button
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-md bg-red-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:bg-slate-50 disabled:text-slate-500"
                    onClick={handleDownvote}
                    disabled={hasVoted}
                >
                    <ArrowDownCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Downvote
                </button>
                
                </div>
                
                <p className='text-indigo-600 hover:underline'><Link to={`/articles`}>Go Back To Articles</Link></p>
                
                <ArticleComments article={article} />

            </div>
          </div>
        </div>
      );

    // return error.triggered ? (
    //     <>
    //         <h2>Something went wrong...</h2>
    //         <p>{ error.error }</p>
    //         <Link to='/articles'>Go back to all articles.</Link>
    //     </>
    // ) : isLoading ? <Loading /> : (
    //     <div className='container'>
    //         <h1>Article!</h1>
    //         <h2>{ article.title }</h2>
    //         <img src={article.article_img_url} />
    //         <p>{ article.body }</p>
    //         <p>Topic: { article.topic }</p>
    //         <span>Votes: { votes }</span>
    //         <button onClick={handleUpvote} disabled={hasVoted}>Upvote</button>
    //         <button onClick={handleDownvote} disabled={hasVoted}>Downvote</button>
    //         <p>Written by: { article.author }</p>
    //         <p>Posted at: { article.created_at }</p>
    //         <p><Link to={`/articles`}>Go Back To Articles</Link></p>
    //         <h3>Comments</h3>
    //         <ArticleComments article={article} />
    //     </div>
    // );
};

export default Article;