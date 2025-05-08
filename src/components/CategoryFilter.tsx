import React from 'react';
import { useNews } from '../context/NewsContext';
import { useNavigate } from 'react-router-dom';

interface CategoryFilterProps {
  currentCategory: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ currentCategory }) => {
  const { categories } = useNews();
  const navigate = useNavigate();
  
  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      navigate('/');
    } else {
      navigate(`/category/${category}`);
    }
  };
  
  return (
    <div className="flex flex-wrap gap-2 my-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;