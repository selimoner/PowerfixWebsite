import { CheckCircle } from "lucide-react";
import { COMPANY_INFO, WHY_CHOOSE_POWERFIX } from "@/lib/constants";

const About = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-powerfix-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Powerfix</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading construction adhesive manufacturer in Rwanda, delivering innovative solutions since {COMPANY_INFO.founded}
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-powerfix-dark mb-6">Our Story</h2>
              <p className="text-lg text-powerfix-gray mb-6">
                PowerFix was founded in {COMPANY_INFO.founded} in {COMPANY_INFO.location}. We produce high-quality adhesives for construction professionals, including tile adhesives, grout, and moisture-resistant solutions. Our vision is to be the regional leader in construction adhesives, delivering durable and innovative products.
              </p>
              <p className="text-lg text-powerfix-gray mb-6">
                Manufactured with Turkish technology, our products meet international standards while being optimized for local conditions. We serve construction professionals, hardware stores, contractors, and distributors across Rwanda and the region.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800"
                alt="Construction site with modern buildings"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-powerfix-dark mb-4">Our Mission</h3>
              <p className="text-powerfix-gray text-lg">
                {COMPANY_INFO.mission}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-powerfix-dark mb-4">Our Vision</h3>
              <p className="text-powerfix-gray text-lg">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PowerFix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-powerfix-dark mb-4">Why Choose PowerFix</h2>
            <p className="text-xl text-powerfix-gray max-w-2xl mx-auto">
              We stand out in the construction adhesive market through our commitment to quality, innovation, and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_POWERFIX.map((reason, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="text-powerfix-red text-2xl mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-powerfix-dark text-lg">{reason}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-powerfix-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-powerfix-yellow mb-2">2016</div>
              <div className="text-gray-300">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-powerfix-yellow mb-2">4</div>
              <div className="text-gray-300">Main Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-powerfix-yellow mb-2">100+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-powerfix-yellow mb-2">Rwanda</div>
              <div className="text-gray-300">Made in</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
