
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Wrench,
  Plane,
  Utensils,
  Settings,
  PlaneTakeoff,
} from "lucide-react";

const services = [
  {
    title: "Private Charters",
    description:
      "Elegant and efficient private flights tailored to your schedule and preferences. Experience travel without compromise.",
    icon: <Plane className="h-10 w-10 text-skyblue" />,
  },
  {
    title: "Corporate Solutions",
    description:
      "Customized aviation services designed for businesses, ensuring your team travels efficiently and in comfort.",
    icon: <Briefcase className="h-10 w-10 text-skyblue" />,
  },
  {
    title: "Spare Parts Support",
    description:
      "Comprehensive FDI marketing and distribution of aircraft parts in India, keeping your fleet in pristine condition.",
    icon: <Wrench className="h-10 w-10 text-skyblue" />,
  },
  {
    title: "Aircraft Management",
    description:
      "Professional management of your aircraft, optimizing operations, maintenance, and financial performance.",
    icon: <Settings className="h-10 w-10 text-skyblue" />,
  },
  {
    title: "Trip Support",
    description:
      "Comprehensive services including crew arrangement, ground handling, and international operations.",
    icon: <PlaneTakeoff className="h-10 w-10 text-skyblue" />,
  },
  {
    title: "Hospitality",
    description:
      "Exquisite personalized catering, premium hotel bookings, and seamless ground transfers for a complete luxury experience.",
    icon: <Utensils className="h-10 w-10 text-skyblue" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding sky-gradient">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-blue">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive aviation solutions delivered with warmth and expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-none shadow-md hover-lift overflow-hidden group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-cloud-light p-5 mb-5 group-hover:bg-skyblue/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <div className="h-1 w-0 group-hover:w-full bg-skyblue transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
