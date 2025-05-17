
import { categories, Category } from "@/data/categories";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-serif font-semibold mb-3 text-journal-navy">Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
            selectedCategory === null 
              ? "bg-journal-navy text-white" 
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          All Categories
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedCategory === category.id 
                ? "bg-journal-navy text-white" 
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
