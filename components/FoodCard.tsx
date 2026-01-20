
import React from 'react';
import { FoodItem } from '../types';

interface FoodCardProps {
  food: FoodItem;
  quantity: number;
  onUpdateCart: (id: string, delta: number) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, quantity, onUpdateCart }) => {
  return (
    <div className="bg-[#000000] rounded-xl pt-6 pb-4 border-b border-white/5 flex gap-4">
      {/* Content Side */}
      <div className="flex-1 space-y-2">
        {/* Shield Icon */}
        <div className="flex items-center">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#A4D800"/>
              <path d="M9 12L11 14L15 10" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>

        {/* Macros */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 font-medium">
          <span className="text-white flex items-center">
            <span className="text-lg font-bold mr-1">{food.protein}g</span>
            <span className="text-xs">Protein</span>
          </span>
          <span className="w-1 h-1 bg-white rounded-full opacity-60"></span>
          <span className="text-white flex items-center">
            <span className="text-lg font-bold mr-1">{food.carb}g</span>
            <span className="text-xs">Carb</span>
          </span>
          <span className="w-1 h-1 bg-white rounded-full opacity-60"></span>
          <span className="text-white flex items-center">
            <span className="text-lg font-bold mr-1">{food.fat}g</span>
            <span className="text-xs">Fat</span>
          </span>
        </div>

        {/* Calories */}
        <div className="text-[#a4d800] text-sm font-semibold">
          {food.calories} Kcal
        </div>

        {/* Tag */}
        <div className="flex gap-2">
          {food.tags.map(tag => (
            <div key={tag} className="bg-[#1a1a1a] text-[#c9954d] text-[10px] font-bold px-2 py-1.5 rounded-md uppercase tracking-wide">
              {tag}
            </div>
          ))}
        </div>

        {/* Title & Price */}
        <div className="pt-2">
          <h3 className="text-lg font-bold text-white leading-tight">{food.name}</h3>
          <p className="text-[#888888] font-medium mt-0.5">₹{food.price}</p>
        </div>
      </div>

      {/* Image and Action Side */}
      <div className="flex flex-col items-center gap-4 min-w-[120px]">
        <div className="relative">
          <img 
            src={food.imageUrl} 
            alt={food.name}
            className="w-28 h-28 object-cover rounded-2xl shadow-lg border border-white/5"
          />
          {/* Floating badges on image */}
          <div className="absolute -top-1 -right-1 flex flex-col gap-1 items-end">
            {food.isBestSeller && (
              <div className="bg-black/80 backdrop-blur-md p-1 rounded-full border border-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
              </div>
            )}
            {food.isSpicy && (
              <div className="bg-black/80 backdrop-blur-md p-1 rounded-full border border-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF4500"><path d="M12 2c0 0 5 3 5 8s-3 8-5 8-5-3-5-8 5-8 5-8z"/></svg>
              </div>
            )}
            {food.isVeg && (
              <div className="bg-black/80 backdrop-blur-md p-1 rounded-sm border border-white/20 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full"></div>
              </div>
            )}
          </div>
        </div>

        {/* Add Button / Counter */}
        <div className="flex flex-col items-center gap-1.5 w-full">
          {quantity === 0 ? (
            <button 
              onClick={() => onUpdateCart(food.id, 1)}
              className="w-full py-2 px-6 border-2 border-[#1b4332] text-[#4CAF50] font-bold rounded-xl active:bg-[#1b4332]/20 transition-colors"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center justify-between w-full bg-[#1b4332] text-white rounded-xl overflow-hidden shadow-inner border border-white/10">
              <button 
                onClick={() => onUpdateCart(food.id, -1)}
                className="flex-1 py-2 flex justify-center active:bg-black/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4" />
                </svg>
              </button>
              <span className="flex-1 text-center font-bold text-lg">{quantity}</span>
              <button 
                onClick={() => onUpdateCart(food.id, 1)}
                className="flex-1 py-2 flex justify-center active:bg-black/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          )}
          <span className="text-[10px] text-gray-500 font-medium">Customisable</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
