
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { getArticleById, Article } from "@/data/articles";
import { categories } from "@/data/categories";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const fetchedArticle = getArticleById(id);
      setArticle(fetchedArticle || null);
      setLoading(false);
    }
  }, [id]);
  
  const category = article ? categories.find(cat => cat.id === article.category) : null;
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading article...</p>
      </div>
    );
  }
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-journal-navy mb-4">Article Not Found</h2>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/articles" className="text-journal-teal hover:underline">
              Browse all articles
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Article Header */}
        <article>
          {article.image && (
            <div className="w-full h-64 md:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-journal-navy/80 to-transparent z-10" />
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
              <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 z-20 pb-8 md:pb-16">
                <div className="max-w-4xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-journal-teal/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {category?.name || "Uncategorized"}
                    </span>
                    <span className="text-sm text-white/90">
                      {format(new Date(article.publicationDate), "MMMM d, yyyy")}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                    {article.title}
                  </h1>
                </div>
              </div>
            </div>
          )}
          
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              {/* Abstract */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-bold text-journal-navy mb-4">Abstract</h2>
                <div className="p-6 bg-journal-navy/5 rounded-lg">
                  <p className="italic text-gray-700">{article.abstract}</p>
                </div>
              </div>
              
              {/* Authors */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-bold text-journal-navy mb-4">Authors</h2>
                <div className="space-y-4">
                  {article.authors.map(author => (
                    <div key={author.id} className="p-4 border border-gray-200 rounded-lg">
                      <p className="font-medium text-journal-navy">{author.name}</p>
                      <p className="text-gray-600 text-sm">{author.title}</p>
                      <p className="text-gray-600 text-sm">{author.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Article Content */}
              <div className="mb-12">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
              
              {/* Article Footer */}
              <div className="border-t border-gray-200 pt-8 mb-12">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Published on {format(new Date(article.publicationDate), "MMMM d, yyyy")}
                  </p>
                  
                  <Link to="/articles" className="text-journal-teal hover:underline text-sm font-medium">
                    Back to Articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
