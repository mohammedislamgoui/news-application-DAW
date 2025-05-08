import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types/types';
import { formatDistanceToNow } from 'date-fns';

interface ViewedArticlesListProps {
  articles: Article[];
}

const ViewedArticlesList: React.FC<ViewedArticlesListProps> = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">You haven't read any articles yet.</p>
        <Link 
          to="/" 
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Start Reading
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <Link 
          key={article.id}
          to={`/article/${article.id}`}
          className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all p-4"
        >
          <div className="w-24 h-24 flex-shrink-0 rounded overflow-hidden">
            <img 
              src={article.thumbnail} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                {article.category}
              </span>
              <span className="text-sm text-gray-500">
                Read {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ViewedArticlesList;