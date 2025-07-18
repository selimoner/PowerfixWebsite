import { Layers, Mountain, Waves, Brush, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS } from "@/lib/constants";
// @ts-ignore
import { Helmet } from "react-helmet";

const iconMap = {
  Layers,
  Mountain,
  Waves,
  Brush,
};
const productImages = [
  "/images/tileadh.png",
  "/images/graniteadh.png",
  "/images/swimmingpooladh.png",
  "/images/grout.png",
];

const Products = () => {
  return (
    <div className="py-20">
      <Helmet>
        <title>Powerfix | Products</title>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-powerfix-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive range of construction adhesives for every application,
            manufactured with Turkish Technology
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRODUCTS.map((product, index) => {
              const Icon = iconMap[product.icon as keyof typeof iconMap];
              const colors = [
                { bg: "bg-powerfix-yellow", text: "text-powerfix-dark" },
                { bg: "bg-teal-400", text: "text-white" },
                { bg: "bg-blue-500", text: "text-white" },
                { bg: "bg-gray-500", text: "text-white" },
              ];

              return (
                <Card key={product.id} className="bg-white shadow-lg">
                  <CardContent className="p-12">
                    {/* Product Image */}
                    <div className="h-96 w-full overflow-hidden rounded-t-xl">
                      <img
                        src={productImages[index]}
                        alt={product.name}
                        className="w-full max-h-96 object-contain mx-auto"
                      />
                    </div>

                    {/* Product Content */}
                    <div className="p-6">
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-16 h-16 ${colors[index].bg} rounded-lg flex items-center justify-center mr-4`}
                        >
                          <Icon className={`w-8 h-8 ${colors[index].text}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-powerfix-dark">
                            {product.name}
                          </h3>
                          <Badge variant="secondary" className="mt-1">
                            High Performance
                          </Badge>
                        </div>
                      </div>

                      <p className="text-powerfix-gray mb-6 text-lg">
                        {product.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Check className="text-powerfix-red w-5 h-5 mr-3 flex-shrink-0" />
                            <span className="text-powerfix-gray">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-powerfix-red font-semibold text-lg">
                          {product.package} Package
                        </span>
                        <span className="text-powerfix-dark font-medium">
                          Made in Rwanda
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-powerfix-dark mb-4">
              Why Choose Powerfix?
            </h2>
            <p className="text-xl text-powerfix-gray max-w-2xl mx-auto">
              All our products share these superior characteristics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Easy to Apply",
                description: "Only mix with water - no complex procedures",
                icon: "💧",
              },
              {
                title: "Superior Water Retention",
                description: "Maintains workability in various conditions",
                icon: "🌊",
              },
              {
                title: "Strong Bonding",
                description: "Excellent adhesion to various substrates",
                icon: "🔗",
              },
              {
                title: "Sag-Resistant",
                description: "Maintains position during application",
                icon: "⚡",
              },
              {
                title: "No Extra",
                description: "No need to add any extra materials",
                icon: "🚫",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-powerfix-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-powerfix-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
