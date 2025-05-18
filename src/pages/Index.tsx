import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFeaturedArticles, getRecentArticles } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import FeaturedArticle from "@/components/FeaturedArticle";
import { Button } from "@/components/ui/button";
import '@/styles/index.css';

const Index = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [recentArticles, setRecentArticles] = useState([]);
  
  useEffect(() => {
    setFeaturedArticles(getFeaturedArticles());
    setRecentArticles(getRecentArticles(3));
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-journal-navy to-journal-teal py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Advancing Educational Research and Practice
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              A peer-reviewed journal dedicated to publishing high-quality research in education
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/articles">
                <Button className="bg-white text-journal-navy hover:bg-gray-100">
                  Browse Articles
                </Button>
              </Link>
              <Link to="/articles">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Submit Research
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-8 text-center">
              Featured Articles
            </h2>
            
            {featuredArticles.length > 0 && (
              <div className="space-y-8 md:space-y-12">
                {featuredArticles.map(article => (
                  <FeaturedArticle key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Recent Publications */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy">
                Recent Publications
              </h2>
              <Link to="/articles" className="text-journal-teal hover:text-journal-navy transition-colors font-medium">
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentArticles.map(article => (
                <ArticleCard key={article.id} article={article} className="h-full" />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-journal-navy/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
              Contribute to Academia Journal
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Share your research with our community of educators and researchers. We welcome submissions across all areas of educational research.
            </p>
            <Link to="/articles">
              <Button className="bg-journal-teal hover:bg-journal-teal/80 text-white">
                Submit Your Research
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;