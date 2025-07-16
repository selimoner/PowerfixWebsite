import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

const Hero = () => {
  return (
    <section className="relative bg-powerfix-dark overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/11.webp)",
        }}
      >
        <div
  className="absolute inset-0 bg-black opacity-50"
  style={{
    background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))"
  }}
></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            High-Performance Construction
            <span className="block text-powerfix-yellow">Adhesive Solutions</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Manufactured in Rwanda using advanced Turkish technology, Powerfix delivers premium adhesive solutions for construction professionals. Easy to apply, strong bonding, and highly resistant to water and humidity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-powerfix-yellow hover:bg-powerfix-yellow/90 text-powerfix-dark px-8 py-3 text-lg font-semibold"
              >
                Discover Our Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-powerfix-red hover:bg-powerfix-red/90 text-white px-8 py-3 text-lg font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
