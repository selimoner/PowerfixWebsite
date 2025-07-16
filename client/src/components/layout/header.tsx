import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  // Generalized click handler for all items
  const handleNavClick = (href: string) => {
    if (location === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setLocation(href);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          {
                        <button
                onClick={() => handleNavClick("/")}
                className="flex items-center"
              >
                <div>
                  <div className="flex items-center">
                    <span className="text-powerfix-red font-bold text-4xl">POWER</span>
                    <span className="text-powerfix-dark font-bold text-4xl">FIX</span>
                  </div>
                  <div className="text-powerfix-gray text-base font-medium tracking-wide">
                    The world of adhesive
                  </div>
                </div>
              </button>
              }

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-powerfix-red"
                    : "text-powerfix-dark hover:text-powerfix-red"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item.href);
                      setIsOpen(false);
                    }}
                    className={`block px-3 py-2 text-left font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-powerfix-red"
                        : "text-powerfix-dark hover:text-powerfix-red"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;