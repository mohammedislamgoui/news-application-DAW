import React from 'react';
import { useNews } from '../context/NewsContext';
import ViewedArticlesList from '../components/ViewedArticlesList';
import { User, Clock } from 'lucide-react';

const UserProfile: React.FC = () => {
  const { userProfile, getArticleById } = useNews();
  
  // Get full article objects from IDs
  const viewedArticles = userProfile.viewedArticles
    .map(id => getArticleById(id))
    .filter(article => article !== undefined) as Array<ReturnType<typeof getArticleById> & {}>;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-white rounded-full w-16 h-16 shadow-md">
              <User size={32} className="text-blue-600" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold">{userProfile.username}</h1>
              <p className="text-blue-100">Reader Profile</p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-6">
            <Clock size={20} className="mr-2 text-blue-600" />
            <h2 className="text-xl font-bold">Reading History</h2>
          </div>
          
          <ViewedArticlesList articles={viewedArticles} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;