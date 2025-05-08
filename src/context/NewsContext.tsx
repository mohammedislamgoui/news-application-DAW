import React, { createContext, useContext, useState, useEffect } from 'react';
import { Article, Comment, UserProfile } from '../types/types';
import { newsArticles, initialUserProfile } from '../data/newsData';

interface NewsContextType {
  articles: Article[];
  userProfile: UserProfile;
  viewArticle: (articleId: string) => void;
  likeArticle: (articleId: string) => void;
  dislikeArticle: (articleId: string) => void;
  addComment: (articleId: string, comment: string) => void;
  getArticleById: (id: string) => Article | undefined;
  getTrendingArticles: () => Article[];
  getArticlesByCategory: (category: string) => Article[];
  categories: string[];
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [articles, setArticles] = useState<Article[]>(newsArticles);
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : initialUserProfile;
  });

  // Extract unique categories from articles
  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];

  // Save user profile to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }, [userProfile]);

  const viewArticle = (articleId: string) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === articleId 
          ? { ...article, viewCount: article.viewCount + 1 } 
          : article
      )
    );
    
    // Add to user's viewed articles if not already there
    if (!userProfile.viewedArticles.includes(articleId)) {
      setUserProfile(prev => ({
        ...prev,
        viewedArticles: [articleId, ...prev.viewedArticles]
      }));
    }
  };

  const likeArticle = (articleId: string) => {
    // Check if article was already liked
    const alreadyLiked = userProfile.likedArticles.includes(articleId);
    
    // Check if article was previously disliked
    const wasDisliked = userProfile.dislikedArticles.includes(articleId);
    
    // Update articles
    setArticles(prevArticles => 
      prevArticles.map(article => {
        if (article.id === articleId) {
          return {
            ...article,
            likes: alreadyLiked ? article.likes - 1 : article.likes + 1,
            dislikes: wasDisliked ? article.dislikes - 1 : article.dislikes
          };
        }
        return article;
      })
    );
    
    // Update user profile
    setUserProfile(prev => {
      // If already liked, remove from liked articles
      if (alreadyLiked) {
        return {
          ...prev,
          likedArticles: prev.likedArticles.filter(id => id !== articleId)
        };
      }
      
      // If was disliked, remove from disliked articles
      const updatedDisliked = wasDisliked 
        ? prev.dislikedArticles.filter(id => id !== articleId)
        : prev.dislikedArticles;
      
      // Add to liked articles
      return {
        ...prev,
        likedArticles: [...prev.likedArticles, articleId],
        dislikedArticles: updatedDisliked
      };
    });
  };

  const dislikeArticle = (articleId: string) => {
    // Check if article was already disliked
    const alreadyDisliked = userProfile.dislikedArticles.includes(articleId);
    
    // Check if article was previously liked
    const wasLiked = userProfile.likedArticles.includes(articleId);
    
    // Update articles
    setArticles(prevArticles => 
      prevArticles.map(article => {
        if (article.id === articleId) {
          return {
            ...article,
            dislikes: alreadyDisliked ? article.dislikes - 1 : article.dislikes + 1,
            likes: wasLiked ? article.likes - 1 : article.likes
          };
        }
        return article;
      })
    );
    
    // Update user profile
    setUserProfile(prev => {
      // If already disliked, remove from disliked articles
      if (alreadyDisliked) {
        return {
          ...prev,
          dislikedArticles: prev.dislikedArticles.filter(id => id !== articleId)
        };
      }
      
      // If was liked, remove from liked articles
      const updatedLiked = wasLiked 
        ? prev.likedArticles.filter(id => id !== articleId)
        : prev.likedArticles;
      
      // Add to disliked articles
      return {
        ...prev,
        dislikedArticles: [...prev.dislikedArticles, articleId],
        likedArticles: updatedLiked
      };
    });
  };

  const addComment = (articleId: string, content: string) => {
    const newComment: Comment = {
      id: `c${Date.now()}`,
      userId: userProfile.id,
      username: userProfile.username,
      content,
      createdAt: new Date().toISOString()
    };
    
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === articleId 
          ? { ...article, comments: [newComment, ...article.comments] } 
          : article
      )
    );
  };

  const getArticleById = (id: string): Article | undefined => {
    return articles.find(article => article.id === id);
  };

  const getTrendingArticles = (): Article[] => {
    return [...articles].sort((a, b) => b.viewCount - a.viewCount).slice(0, 3);
  };

  const getArticlesByCategory = (category: string): Article[] => {
    return category === 'All' 
      ? articles 
      : articles.filter(article => article.category === category);
  };

  return (
    <NewsContext.Provider value={{
      articles,
      userProfile,
      viewArticle,
      likeArticle,
      dislikeArticle,
      addComment,
      getArticleById,
      getTrendingArticles,
      getArticlesByCategory,
      categories
    }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = (): NewsContextType => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};