import ContactForm from "@/components/sections/contact-form";

const Contact = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-powerfix-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for expert advice, product information, and professional support
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Contact;
