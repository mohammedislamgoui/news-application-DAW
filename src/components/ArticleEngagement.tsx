import React from 'react';
import { useNews } from '../context/NewsContext';
import { ThumbsUp, ThumbsDown, Eye } from 'lucide-react';

interface ArticleEngagementProps {
  articleId: string;
  viewCount: number;
  likes: number;
  dislikes: number;
}

const ArticleEngagement: React.FC<ArticleEngagementProps> = ({ 
  articleId, 
  viewCount, 
  likes, 
  dislikes 
}) => {
  const { userProfile, likeArticle, dislikeArticle } = useNews();
  
  const isLiked = userProfile.likedArticles.includes(articleId);
  const isDisliked = userProfile.dislikedArticles.includes(articleId);
  
  return (
    <div className="flex items-center gap-6 py-4 border-t border-b border-gray-200 my-6">
      <div className="flex items-center text-gray-600">
        <Eye size={20} className="mr-2" />
        <span>{viewCount} views</span>
      </div>
      
      <button 
        className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${
          isLiked 
            ? 'bg-blue-100 text-blue-600' 
            : 'hover:bg-gray-100 text-gray-600'
        }`}
        onClick={() => likeArticle(articleId)}
        aria-label={isLiked ? "Unlike article" : "Like article"}
      >
        <ThumbsUp 
          size={18} 
          className={`${isLiked ? 'fill-blue-600 text-blue-600' : ''}`} 
        />
        <span>{likes}</span>
      </button>
      
      <button 
        className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${
          isDisliked 
            ? 'bg-red-100 text-red-600' 
            : 'hover:bg-gray-100 text-gray-600'
        }`}
        onClick={() => dislikeArticle(articleId)}
        aria-label={isDisliked ? "Remove dislike" : "Dislike article"}
      >
        <ThumbsDown 
          size={18} 
          className={`${isDisliked ? 'fill-red-600 text-red-600' : ''}`} 
        />
        <span>{dislikes}</span>
      </button>
    </div>
  );
};

export default ArticleEngagement;