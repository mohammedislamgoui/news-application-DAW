import React from 'react';
import { Link } from 'react-router-dom';
import { useNews } from '../context/NewsContext';
import { TrendingUp, Eye } from 'lucide-react';

const TrendingSidebar: React.FC = () => {
  const { getTrendingArticles } = useNews();
  const trendingArticles = getTrendingArticles();
  
  return (
    <aside className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <TrendingUp size={20} className="text-red-500 mr-2" />
        <h2 className="text-lg font-bold">Trending Now</h2>
      </div>
      
      <div className="space-y-4">
        {trendingArticles.map((article) => (
          <Link 
            key={article.id} 
            to={`/article/${article.id}`}
            className="group flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <img 
                src={article.thumbnail} 
                alt={article.title} 
                className="w-full h-full object-cover rounded"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-sm font-medium line-clamp-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <Eye size={12} className="mr-1" />
                <span>{article.viewCount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default TrendingSidebar;