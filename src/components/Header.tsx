
import { Link } from "react-router-dom";
import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Book className="h-8 w-8 text-journal-navy" />
          <Link to="/" className="text-2xl font-serif font-bold text-journal-navy">
            Academia Journal
          </Link>
        </div>
        
        <nav className="flex items-center space-x-1 md:space-x-4">
          <Link to="/" className="px-3 py-2 text-journal-navy hover:text-journal-teal transition-colors">
            Home
          </Link>
          <Link to="/articles" className="px-3 py-2 text-journal-navy hover:text-journal-teal transition-colors">
            Articles
          </Link>
          <Link to="/articles" className="hidden md:inline-block">
            <Button variant="outline" className="border-journal-teal text-journal-teal hover:bg-journal-teal/10">
              Submit Article
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
