import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNews } from '../context/NewsContext';
import { formatDistanceToNow } from 'date-fns';
import ArticleEngagement from '../components/ArticleEngagement';
import CommentSection from '../components/CommentSection';
import TrendingSidebar from '../components/TrendingSidebar';
import { ArrowLeft } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { articleId = '' } = useParams<{ articleId: string }>();
  const { getArticleById, viewArticle, addComment } = useNews();
  const navigate = useNavigate();
  
  const article = getArticleById(articleId);
  
  useEffect(() => {
    if (article) {
      viewArticle(articleId);
      
      // Update page title with article title
      document.title = `${article.title} | NewsHub`;
      
      // Clean up on unmount
      return () => {
        const defaultTitle = document.querySelector('title[data-default]');
        if (defaultTitle) {
          document.title = defaultTitle.textContent || 'Vite + React + TS';
        }
      };
    }
  }, [articleId, article, viewArticle]);
  
  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h1>
        <p className="text-gray-600 mb-8">
          The article you're looking for might have been removed or doesn't exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-6"
      >
        <ArrowLeft size={18} className="mr-1" />
        Back
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <article className="lg:col-span-3">
          <header className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                {article.category}
              </span>
              <time 
                dateTime={article.publishedAt} 
                className="text-sm text-gray-500"
              >
                {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
              </time>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {article.title}
            </h1>
          </header>
          
          <div className="mb-8">
            <img 
              src={article.thumbnail} 
              alt={article.title} 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-800 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <ArticleEngagement 
            articleId={article.id}
            viewCount={article.viewCount}
            likes={article.likes}
            dislikes={article.dislikes}
          />
          
          <CommentSection 
            comments={article.comments}
            onAddComment={(content) => addComment(article.id, content)}
          />
        </article>
        
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TrendingSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleDetail;