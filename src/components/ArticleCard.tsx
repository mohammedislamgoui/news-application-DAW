import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types/types';
import { formatDistanceToNow } from 'date-fns';
import { Eye } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link 
      to={`/article/${article.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.thumbnail} 
          alt={article.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h2>
        
        <p className="text-gray-600 mb-3 text-sm line-clamp-3">
          {article.summary}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Eye size={16} className="mr-1" />
            <span>{article.viewCount}</span>
          </div>
          <time dateTime={article.publishedAt}>
            {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
          </time>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;