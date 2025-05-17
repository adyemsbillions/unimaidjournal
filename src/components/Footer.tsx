
import { Link } from "react-router-dom";
import { Book, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-journal-navy text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Book className="h-6 w-6" />
              <span className="text-xl font-serif font-bold">Academia Journal</span>
            </div>
            <p className="text-gray-300 mb-4">
              A peer-reviewed journal focused on advancing educational research and practice.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-journal-gold">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-journal-gold">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-white">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-white">
                  Submit Article
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-white">
                  Educational Technology
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-white">
                  Pedagogy
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-white">
                  Research Methods
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-white">
                  View All Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Academia Journal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
