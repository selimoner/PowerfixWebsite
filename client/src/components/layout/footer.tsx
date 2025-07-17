import { Link } from "wouter";
import { Home, Phone, Mail, Globe, Facebook, Instagram } from "lucide-react";
import { COMPANY_INFO, PRODUCTS } from "@/lib/constants";
import { IconBrandTiktok } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-powerfix-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div>
                <div className="flex items-center">
                  <span className="text-powerfix-red font-bold text-xl">POWER</span>
                  <span className="text-white font-bold text-xl">FIX</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{COMPANY_INFO.slogan}</p>
            <p className="text-sm text-gray-400">Manufactured with Turkish Technology</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-powerfix-yellow transition-colors">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-powerfix-yellow transition-colors">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-gray-400 hover:text-powerfix-yellow transition-colors">Products</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-powerfix-yellow transition-colors">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <span className="text-gray-400">{product.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {COMPANY_INFO.contact.phone1}
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {COMPANY_INFO.contact.phone2}
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {COMPANY_INFO.contact.email}
              </p>
              <p className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                {COMPANY_INFO.contact.website}
              </p>
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium text-white mb-2">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://facebook.com/powerfixadhesive" target="blank" className="text-gray-400 hover:text-powerfix-yellow transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/powerfixadhesive" target="blank" className="text-gray-400 hover:text-powerfix-yellow transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://tiktok.com/@powerfixadhesive" target="blank" className="text-gray-400 hover:text-powerfix-yellow transition-colors">
                  <IconBrandTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025. All rights reserved. IMEX Hardware and Construction Ltd (IHC)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
