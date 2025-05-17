
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Article } from "@/data/articles";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  const category = categories.find(cat => cat.id === article.category);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg overflow-hidden shadow-md">
      {article.image && (
        <div className="h-full max-h-[400px] overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-journal-teal/10 text-journal-teal px-3 py-1 rounded-full text-xs font-medium">
            {category?.name || "Uncategorized"}
          </span>
          <span className="text-sm text-gray-500">
            {format(new Date(article.publicationDate), "MMMM d, yyyy")}
          </span>
        </div>
        
        <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4 text-journal-navy">
          {article.title}
        </h2>
        
        <p className="text-gray-600 mb-6">
          {article.abstract}
        </p>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            By {article.authors.map(author => author.name).join(", ")}
          </p>
        </div>
        
        <Link to={`/article/${article.id}`}>
          <Button className="bg-journal-navy hover:bg-journal-navy/80 text-white">
            Read Article
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArticle;
