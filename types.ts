
export interface FoodItem {
  id: string;
  name: string;
  price: number;
  protein: number;
  carb: number;
  fat: number;
  calories: number;
  tags: string[];
  imageUrl: string;
  isVeg: boolean;
  isBestSeller: boolean;
  isSpicy: boolean;
}

export type Category = 'All' | 'High Protein' | 'Low Kcal' | 'Gluten Free' | 'Vegan';
