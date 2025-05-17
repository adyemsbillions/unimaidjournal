
import { useState, useEffect } from "react";
import { articles, Article } from "@/data/articles";
import { categories } from "@/data/categories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ArticleCard from "@/components/ArticleCard";

const Articles = () => {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  useEffect(() => {
    let result = [...articles];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.abstract.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(article => article.category === selectedCategory);
    }
    
    // Sort by newest first
    result.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());
    
    setFilteredArticles(result);
  }, [searchQuery, selectedCategory]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-journal-navy py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-serif font-bold text-white mb-4">
              Browse Articles
            </h1>
            <p className="text-white/80 max-w-3xl">
              Explore our collection of peer-reviewed research articles across various domains of educational research and practice.
            </p>
          </div>
        </section>
        
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <CategoryFilter 
                selectedCategory={selectedCategory} 
                onSelectCategory={handleCategorySelect}
              />
            </div>
            
            {/* Article Grid */}
            <div className="w-full md:w-3/4">
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map(article => (
                    <ArticleCard key={article.id} article={article} className="h-full" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No articles found. Try adjusting your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
