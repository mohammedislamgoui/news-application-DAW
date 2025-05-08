import React from 'react';
import { useParams } from 'react-router-dom';
import { useNews } from '../context/NewsContext';
import ArticleCard from '../components/ArticleCard';
import TrendingSidebar from '../components/TrendingSidebar';
import CategoryFilter from '../components/CategoryFilter';

const CategoryPage: React.FC = () => {
  const { categoryName = '' } = useParams<{ categoryName: string }>();
  const { getArticlesByCategory } = useNews();
  const articles = getArticlesByCategory(categoryName);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryName} News</h1>
      <p className="text-gray-600 mb-6">Latest updates in {categoryName.toLowerCase()}</p>
      
      <CategoryFilter currentCategory={categoryName} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="md:col-span-2 lg:col-span-3">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-xl font-medium text-gray-700 mb-2">No articles found</h2>
              <p className="text-gray-500">
                There are currently no articles in the {categoryName} category.
              </p>
            </div>
          )}
        </div>
        
        <div className="hidden md:block">
          <div className="sticky top-24">
            <TrendingSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;