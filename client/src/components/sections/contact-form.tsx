import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Linkedin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-powerfix-dark mb-4">Contact Us</h2>
          <p className="text-xl text-powerfix-gray max-w-2xl mx-auto">
            Get in touch with our team for expert advice and product information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-powerfix-dark mb-6">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-powerfix-gray font-medium">Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-powerfix-gray font-medium">Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-powerfix-gray font-medium">Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+250 XXX XXX XXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-powerfix-gray font-medium">Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5} 
                            placeholder="Tell us about your project" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-powerfix-red hover:bg-powerfix-red/90 text-white text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-powerfix-dark mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-powerfix-red text-xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-powerfix-dark">Address</h4>
                    <p className="text-powerfix-gray">{COMPANY_INFO.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-powerfix-red text-xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-powerfix-dark">Phone</h4>
                    <p className="text-powerfix-gray">{COMPANY_INFO.contact.phone1}</p>
                    <p className="text-powerfix-gray">{COMPANY_INFO.contact.phone2}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-powerfix-red text-xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-powerfix-dark">Email</h4>
                    <p className="text-powerfix-gray">{COMPANY_INFO.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="text-powerfix-red text-xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-powerfix-dark">Website</h4>
                    <p className="text-powerfix-gray">{COMPANY_INFO.contact.website}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-powerfix-dark mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-powerfix-red hover:bg-powerfix-red/90 text-white rounded-full flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-powerfix-red hover:bg-powerfix-red/90 text-white rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-powerfix-red hover:bg-powerfix-red/90 text-white rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gray-200">
              <CardContent className="p-0">
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-powerfix-gray mx-auto mb-2" />
                    <p className="text-powerfix-gray font-medium">Map: Gisozi, Gakinjiro, Umukindo Plaza</p>
                    <p className="text-sm text-powerfix-gray">KN 78, Kigali - Rwanda</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
