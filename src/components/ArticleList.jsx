import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles }) => {
    
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
            <div className="mt-4 space-y-8 border-gray-200 pt-6 sm:mt-8 sm:pt-8">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} article={article} />
                ))}
            </div>
            </div>
        </div>
    );
    
    // return (
    //     <ul className='card-list'>
    //         {articles.map((article) => (
    //             <ArticleCard key={article.article_id} article={article} />
    //         ))}
    //     </ul>
    // );
};

export default ArticleList;