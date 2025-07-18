import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Globe, Facebook, Instagram } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { IconBrandTiktok } from "@tabler/icons-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  PowerfixTileAdhcompany: z.string().optional(),
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
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    const honeypot = (
      document.querySelector(
        "input[name='PowerfixTileAdhcompany']"
      ) as HTMLInputElement
    )?.value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, company: honeypot }),
      });

      const result = await res.json();

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Server error",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-powerfix-dark mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-powerfix-gray max-w-2xl mx-auto">
            Get in touch with our team for expert advice and product information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}

          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-powerfix-dark mb-6">
                Send us a Message
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-powerfix-gray font-medium">
                          Name *
                        </FormLabel>
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
                        <FormLabel className="text-powerfix-gray font-medium">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                          />
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
                        <FormLabel className="text-powerfix-gray font-medium">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+250 XXX XXX XXX"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <input
                    type="text"
                    name="PowerfixTileAdhcompany"
                    style={{ display: "none" }}
                    autoComplete="off"
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-powerfix-gray font-medium">
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Tell us about your request or question"
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
          <div className="space-y-16">
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div>
                  <h3 className="text-2xl font-semibold text-powerfix-dark mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="text-powerfix-red text-xl mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-powerfix-dark">
                          Phone
                        </h4>
                        <p className="text-powerfix-gray">
                          {COMPANY_INFO.contact.phone1}
                        </p>
                        <p className="text-powerfix-gray">
                          {COMPANY_INFO.contact.phone2}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="text-powerfix-red text-xl mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-powerfix-dark">
                          Email
                        </h4>
                        <p className="text-powerfix-gray">
                          {COMPANY_INFO.contact.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Globe className="text-powerfix-red text-xl mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-powerfix-dark">
                          Website
                        </h4>
                        <p className="text-powerfix-gray">
                          {COMPANY_INFO.contact.website}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h4 className="text-2xl font-semibold text-powerfix-dark mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/powerfixadhesive"
                    target="blank"
                    className="w-10 h-10 bg-powerfix-red hover:bg-powerfix-red/90 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/powerfixadhesive"
                    target="blank"
                    className="w-10 h-10 bg-powerfix-red hover:bg-powerfix-red/90 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://tiktok.com/@powerfixadhesive"
                    target="blank"
                    className="w-10 h-10 bg-powerfix-red hover:bg-powerfix-red/90 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <IconBrandTiktok className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="bg-gray-50">
              <CardContent className="p-0">
                <div className="p-4 text-center">
                  <MapPin className="w-8 h-8 text-powerfix-gray mx-auto mb-1" />
                  <h4 className="text-lg font-semibold text-powerfix-dark mb-2">
                    Showroom Address
                  </h4>
                  <p className="text-powerfix-gray font-medium">
                    Gisozi, Gakinjiro, KG 33, Umukindo Plaza
                  </p>
                  <p className="text-powerfix-gray font-medium">
                    Above Bank of Kigali Gisozi Branch
                  </p>
                  <p className="text-sm text-powerfix-gray">Kigali - Rwanda</p>
                </div>
                <iframe
                  title="Powerfix Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.784711747021!2d30.06869579279164!3d-1.9238279930703008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca3e44e187f45%3A0x8ffc8eeae09c60c5!2sPowerfix%20Adhesive!5e0!3m2!1str!2srw!4v1752752486792!5m2!1str!2srw"
                  className="w-full h-64"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="bg-gray-50">
              <CardContent className="p-0">
                <div className="p-4 text-center">
                  <MapPin className="w-8 h-8 text-powerfix-gray mx-auto mb-1" />
                  <h4 className="text-lg font-semibold text-powerfix-dark mb-2">
                    Factory Address
                  </h4>
                  <p className="text-powerfix-gray font-medium">
                    Prime Economic Zone Phase 2
                  </p>
                  <p className="text-powerfix-gray font-medium">
                    KG 69, Plot No D22
                  </p>
                  <p className="text-sm text-powerfix-gray">Kigali - Rwanda</p>
                </div>
                <iframe
                  title="Powerfix Factory Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d709.0238520566777!2d30.161452229897765!3d-1.9442814200012406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db59006ac249b9%3A0xcb5118d4e580b8a3!2sPowerfix%20Adhesive!5e0!3m2!1str!2srw!4v1752772409456!5m2!1str!2srw"
                  className="w-full h-64"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
