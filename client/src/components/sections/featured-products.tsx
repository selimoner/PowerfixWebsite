import { Link } from "wouter";
import { Layers, Mountain, Waves, Brush, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCTS } from "@/lib/constants";

const iconMap = {
  Layers,
  Mountain,
  Waves,
  Brush
};

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-powerfix-dark mb-4">Our Products</h2>
          <p className="text-xl text-powerfix-gray max-w-2xl mx-auto">
            High-quality construction adhesives manufactured for superior performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon as keyof typeof iconMap];
            const productImages = [
              "/images/tileadh.png",
              "/images/graniteadh.png",
              "/images/swimmingpooladh.png",
              "/images/grout.png"
            ];
            
            return (
              <Card key={product.id} className="bg-gray-50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 h-96 rounded-lg overflow-hidden">
                    <img 
                      src={productImages[index]} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-powerfix-dark mb-2">{product.name}</h3>
                  <p className="text-powerfix-gray mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-powerfix-red font-semibold">{product.package}</span> */}
                    {/* <ArrowRight className="w-5 h-5 text-powerfix-red" /> */}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button 
              size="lg" 
              className="bg-powerfix-red hover:bg-powerfix-red/90 text-white px-8 py-3 text-lg font-semibold"
            >
              Learn More About Our Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
