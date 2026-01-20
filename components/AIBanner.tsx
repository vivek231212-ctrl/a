
import React, { useState, useEffect } from 'react';
import { getDietaryInsight } from '../services/geminiService';

interface AIBannerProps {
  category: string;
}

const AIBanner: React.FC<AIBannerProps> = ({ category }) => {
  const [insight, setInsight] = useState<string>("Tap to see what's best for you");
  const [loading, setLoading] = useState(false);

  const fetchInsight = async () => {
    setLoading(true);
    const text = await getDietaryInsight('Karan', category);
    setInsight(text);
    setLoading(false);
  };

  return (
    <div 
      onClick={fetchInsight}
      className="mt-2 mb-4 bg-gradient-to-r from-[#88e388] to-[#48c9b0] rounded-2xl p-4 flex items-center justify-between cursor-pointer active:scale-95 transition-transform"
    >
      <div className="flex items-center space-x-2">
        <span className="text-black font-semibold text-lg italic leading-tight">
          "{loading ? "Thinking..." : insight}"
        </span>
      </div>
      <div className="text-black">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};

export default AIBanner;
