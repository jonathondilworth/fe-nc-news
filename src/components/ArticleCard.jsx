import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {

    return (
        <article key={article.article_id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={article.created_at?.split('T')[0]} className="text-gray-500">
                {article.created_at?.split('T')[0]}
            </time>
            <Link
                to={`/topics/${article.topic}`}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
                {article.topic}
            </Link>
            </div>
            <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 hover:underline">
                <Link to={`/article/${article.article_id}`}>
                <span className="absolute inset-0" />
                {article.title}
                </Link>
            </h3>
            </div>
            <div className="relative mt-2 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                    Written by:
                      <a href='#'>
                        <span className="absolute inset-0" />
                        {` ${article.author}`}
                      </a>
                    </p>
                    <p className="text-gray-600">Votes: {article.votes}</p>
                    <p className="text-gray-600">Comments: {article.comment_count}</p>
                  </div>
                </div>
        </article>
    );

    
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