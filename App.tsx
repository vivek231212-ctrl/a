
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AIBanner from './components/AIBanner';
import Filters from './components/Filters';
import FoodCard from './components/FoodCard';
import { FoodItem, Category } from './types';

const MOCK_FOODS: FoodItem[] = [
  {
    id: '1',
    name: 'Grilled Paneer Tikka',
    price: 240,
    protein: 25,
    carb: 13,
    fat: 52,
    calories: 634,
    tags: ['Rich Calcium'],
    imageUrl: 'https://images.unsplash.com/photo-1599481238640-4c1288750d7a?auto=format&fit=crop&q=80&w=400',
    isVeg: true,
    isBestSeller: true,
    isSpicy: true,
  },
  {
    id: '2',
    name: 'Tandoori Soya Chaap',
    price: 220,
    protein: 28,
    carb: 18,
    fat: 42,
    calories: 580,
    tags: ['High Fiber'],
    imageUrl: 'https://images.unsplash.com/photo-1626777553732-48f8f33a4115?auto=format&fit=crop&q=80&w=400',
    isVeg: true,
    isBestSeller: false,
    isSpicy: true,
  },
  {
    id: '3',
    name: 'Egg White Scramble',
    price: 180,
    protein: 22,
    carb: 5,
    fat: 12,
    calories: 210,
    tags: ['Low Fat', 'Lean Protein'],
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400',
    isVeg: false,
    isBestSeller: true,
    isSpicy: false,
  },
  {
    id: '4',
    name: 'Chicken Breast Platter',
    price: 320,
    protein: 45,
    carb: 10,
    fat: 15,
    calories: 420,
    tags: ['Muscle Gain'],
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=400',
    isVeg: false,
    isBestSeller: true,
    isSpicy: false,
  }
];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('High Protein');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ [id: string]: number }>({});

  const filteredFoods = MOCK_FOODS.filter(food => 
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpdateCart = (id: string, delta: number) => {
    setCart(prev => {
      const newCount = (prev[id] || 0) + delta;
      if (newCount <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newCount };
    });
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white max-w-md mx-auto relative overflow-x-hidden">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="px-4 pb-20">
        <AIBanner category={activeCategory} />
        
        <Filters 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <div className="mt-6 mb-4">
          <h2 className="text-xl font-bold tracking-tight">{activeCategory}</h2>
          <p className="text-[#888888] text-sm mt-0.5 font-medium">Sorted by highest protein</p>
        </div>

        <div className="space-y-1">
          {filteredFoods.map(food => (
            <FoodCard 
              key={food.id} 
              food={food} 
              quantity={cart[food.id] || 0}
              onUpdateCart={handleUpdateCart}
            />
          ))}
        </div>
      </div>

      {/* Persistent Bottom Nav Placeholder (Visual enhancement) */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 px-6 py-3 flex justify-between items-center max-w-md mx-auto">
        <div className="text-xs flex flex-col items-center text-white font-medium">
          <div className="w-6 h-6 bg-white rounded-full mb-1"></div>
          Home
        </div>
        <div className="text-xs flex flex-col items-center text-white/50 font-medium">
          <div className="w-6 h-6 bg-white/20 rounded-full mb-1"></div>
          Meals
        </div>
        <div className="text-xs flex flex-col items-center text-white/50 font-medium">
          <div className="w-6 h-6 bg-white/20 rounded-full mb-1"></div>
          Track
        </div>
        <div className="text-xs flex flex-col items-center text-white/50 font-medium">
          <div className="w-6 h-6 bg-white/20 rounded-full mb-1"></div>
          Account
        </div>
      </div>
    </div>
  );
};

export default App;
