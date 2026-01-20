
import React from 'react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="p-4 pt-6 space-y-4">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#A4D800" stroke="#A4D800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-[#8fb67b] flex items-center justify-center text-black font-bold text-sm">
            K
          </div>
        </div>
      </div>

      {/* Search Bar Row */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full bg-[#1a1a1a] text-white rounded-full py-3.5 pl-11 pr-4 focus:outline-none placeholder-gray-500 text-sm border border-transparent focus:border-white/10"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Toggle Switch */}
        <div className="w-12 h-6 bg-[#2d6a4f] rounded-full relative flex items-center p-1 cursor-pointer">
           <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
