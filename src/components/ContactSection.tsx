
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-skyblue" />,
    title: "Call Us",
    content: "+91 123 456 7890",
    action: "tel:+911234567890",
  },
  {
    icon: <Mail className="h-6 w-6 text-skyblue" />,
    title: "Email",
    content: "operations@skydragonaero.com",
    action: "mailto:operations@skydragonaero.com",
  },
  {
    icon: <MapPin className="h-6 w-6 text-skyblue" />,
    title: "Our Office",
    content: "Hyderabad, India",
    action: "https://maps.google.com/?q=Hyderabad,India",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding sky-gradient">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-blue">Contact Us</h2>
        <p className="section-subtitle">
          We're always here, wherever you're flying.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-none shadow-md hover-lift">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-cloud-light p-4 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <Button
                  variant="outline"
                  className="border-skyblue text-skyblue hover:bg-skyblue hover:text-white"
                  asChild
                >
                  <a href={item.action} target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
