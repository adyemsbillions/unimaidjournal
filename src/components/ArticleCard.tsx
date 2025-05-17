
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Article } from "@/data/articles";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { categories } from "@/data/categories";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

const ArticleCard = ({ article, className = "" }: ArticleCardProps) => {
  const category = categories.find(cat => cat.id === article.category);
  
  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow ${className}`}>
      {article.image && (
        <Link to={`/article/${article.id}`}>
          <div className="h-48 overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
        </Link>
      )}
      <CardContent className="p-5">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xs font-medium text-journal-teal">
            {category?.name || "Uncategorized"}
          </span>
          <span className="text-xs text-gray-500">
            {format(new Date(article.publicationDate), "MMMM d, yyyy")}
          </span>
        </div>
        <Link to={`/article/${article.id}`}>
          <h3 className="font-serif font-bold text-lg mb-2 text-journal-navy hover:text-journal-teal transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-3">
          {article.abstract}
        </p>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>By {article.authors.map(author => author.name).join(", ")}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
