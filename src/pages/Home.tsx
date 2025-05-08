import React from 'react';
import { useNews } from '../context/NewsContext';
import ArticleCard from '../components/ArticleCard';
import TrendingSidebar from '../components/TrendingSidebar';
import CategoryFilter from '../components/CategoryFilter';

const Home: React.FC = () => {
  const { getArticlesByCategory } = useNews();
  const articles = getArticlesByCategory('All');
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest News</h1>
      <p className="text-gray-600 mb-6">Stay informed with our most recent updates</p>
      
      <CategoryFilter currentCategory="All" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="md:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
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

export default Home;