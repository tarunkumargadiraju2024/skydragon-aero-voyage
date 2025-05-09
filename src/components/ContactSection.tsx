import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-skyblue" />,
    title: "Contact",
    content: [
      "+91 9533490539", 
      "+91 9848274255",
      "Email: ops@skydragonaero.com"
    ],
    action: "tel:+919533490539",
  },
  {
    icon: <MapPin className="h-6 w-6 text-skyblue" />,
    title: "Our Offices",
    content: [
      "Operations: 17-2-80/2 2nd lane, Guntur, Andhra Pradesh, India - 522001",
      "Corporate: 104, 6/3 Primila Enclave, Kukatpally, Hyderabad - 500055"
    ],
    action: "https://maps.google.com/?q=Hyderabad,India",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding sky-gradient">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-brand-blue">Contact Us</h2>
        <p className="section-subtitle">
          Your direct line to exceptional private aviation services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-none shadow-md hover-lift">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="rounded-full bg-cloud-light p-4 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-blue mb-4">
                  {item.title}
                </h3>
                {Array.isArray(item.content) ? (
                  <div className="text-gray-600 mb-6 space-y-3">
                    {item.content.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 mb-6">{item.content}</p>
                )}
                <Button
                  variant="outline"
                  className="border-skyblue text-skyblue hover:bg-skyblue hover:text-white w-full max-w-[200px]"
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
