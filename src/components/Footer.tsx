import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-white shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              AwsQuality
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Delivering Business Productivity In The Cloud. Transform your business with powerful AI solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@awsquality.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AwsQuality. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
