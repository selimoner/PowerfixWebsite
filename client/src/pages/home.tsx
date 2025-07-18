import Hero from "@/components/sections/hero";
import FeaturedProducts from "@/components/sections/featured-products";
import ReferenceProjects from "@/components/sections/reference-projects";
import { CheckCircle, Images } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
// @ts-ignore
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Powerfix | Home</title>
      </Helmet>
      <Hero />

      <FeaturedProducts />

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-powerfix-dark mb-6">
                About Powerfix
              </h2>
              <p className="text-lg text-powerfix-gray mb-6">
                Powerfix was founded in {COMPANY_INFO.founded} in{" "}
                {COMPANY_INFO.location}. We produce high-quality adhesives for
                construction professionals, including tile adhesives, granite
                adhesives, grout and water-humidity resistant solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-powerfix-red text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-powerfix-dark">
                      Reliable Performance
                    </h4>
                    <p className="text-sm text-powerfix-gray">
                      Consistent quality you can trust
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-powerfix-red text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-powerfix-dark">
                      Expert Support
                    </h4>
                    <p className="text-sm text-powerfix-gray">
                      Professional customer service
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-powerfix-red text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-powerfix-dark">
                      Innovation
                    </h4>
                    <p className="text-sm text-powerfix-gray">
                      Cutting-edge construction solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-powerfix-red text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-powerfix-dark">
                      Technology
                    </h4>
                    <p className="text-sm text-powerfix-gray">
                      Advanced manufacturing standards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="images/12.jpg"
                alt="Modern construction building with workers"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <ReferenceProjects />
    </div>
  );
};

export default Home;
