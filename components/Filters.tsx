
import React from 'react';
import { Category } from '../types';

interface FiltersProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
}

const Filters: React.FC<FiltersProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: Category[] = ['All', 'High Protein', 'Low Kcal', 'Gluten Free', 'Vegan'];

  return (
    <div className="flex overflow-x-auto space-x-2 py-2 no-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-colors border ${
            activeCategory === cat
              ? 'bg-[#1b4332] text-white border-transparent'
              : 'bg-[#1a1a1a] text-gray-300 border-[#2a2a2a]'
          }`}
        >
          {cat === 'Vegan' ? (
             <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="currentColor"/>
                </svg>
                {cat}
             </div>
          ) : cat}
        </button>
      ))}
    </div>
  );
};

export default Filters;
