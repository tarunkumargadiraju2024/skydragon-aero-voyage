
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
    description: (
      <div className="text-left space-y-2">
        <div>
          Our comprehensive Spare Parts Support ensures operational readiness and reliability for your fleet.<br />
          We offer a wide range of certified components and consumables, tailored to meet the demands of both scheduled maintenance and urgent repairs.
          Our inventory and sourcing capabilities cover key categories:
        </div>
        <ol className="list-decimal list-inside pl-4 space-y-3 text-gray-700/90">
          <li>
            <b>Rotables</b>
            <br />
            Rotable components are designed for repair and reuse, making them a cost-effective solution for long-term maintenance planning.
            We provide timely access to a broad inventory of airworthy, overhauled, and serviceable rotable parts, ensuring reduced aircraft downtime and optimized operational efficiency.
          </li>
          <li>
            <b>Expandables</b>
            <br />
            Expendables are single-use components that are replaced after each use.
            Our inventory includes fast-moving and critical expendables—ranging from hardware and seals to filters and gaskets—sourced from trusted OEMs and fully compliant with aviation standards.
          </li>
          <li>
            <b>POLs (Petroleum, Oil &amp; Lubricants)</b>
            <br />
            We supply high-quality Petroleum, Oil, and Lubricants (POLs) essential for the smooth operation and maintenance of aircraft systems.
            Our POLs inventory includes engine oils, hydraulic fluids, greases, and specialty lubricants, all compliant with OEM specifications and aviation-grade standards.
          </li>
        </ol>
      </div>
    ),
    icon: <Wrench className="h-10 w-10 text-skyblue" />,
  },
  {
    title: "Aircraft Management",
    description: (
      <div className="text-left space-y-2">
        <ol className="list-decimal list-inside pl-4 space-y-3 text-gray-700/90">
          <li>
            <b>Aircraft Acquisition & Leasing</b>
            <div className="text-sm text-gray-600">
              <b>Aircraft Availability & Condition:</b> Ensuring the aircraft is always ready for operation, well-maintained, and meets regulatory requirements.<br />
              <b>Purchasing:</b> Evaluate the market, assess options (new or pre-owned), and negotiate terms.<br />
              <b>Leasing:</b> Wet Lease (aircraft, crew, maintenance, insurance) or Dry Lease (just aircraft).<br />
              <b>Financing:</b> Loans, bank financing, operating/capital leases.
            </div>
          </li>
          <li>
            <b>Scheduling</b>
            <div className="text-sm text-gray-600">
              Operational Calendar Management: Scheduling flights involves coordinating variables such as flight routes, crew, maintenance, and weather.<br />
              Flight Planning: Optimizing routes for efficiency and safety.<br />
              Crew Scheduling and Maintenance Timelines are managed to ensure maximum readiness.
            </div>
          </li>
          <li>
            <b>Charter Services</b>
            <div className="text-sm text-gray-600">
              Flexible charter options, tailored services, regulatory compliance, and competitive pricing for private or corporate clients.
            </div>
          </li>
          <li>
            <b>Onboard Services</b>
            <div className="text-sm text-gray-600">
              Certified crew, high-quality catering, and outstanding customer service for an elevated in-flight experience.
            </div>
          </li>
          <li>
            <b>Communication</b>
            <div className="text-sm text-gray-600">
              Real-time flight status updates, timely notifications, and emergency communication to keep all parties informed and safe.
            </div>
          </li>
        </ol>
      </div>
    ),
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
        <h2 className="section-title font-playfair text-brand-blue">Our Services</h2>
        <p className="section-subtitle font-sans">
          Comprehensive aviation solutions delivered with warmth and expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={
                "bg-white/90 backdrop-blur-md border-none shadow-lg hover-lift overflow-hidden group transition-all duration-300 " +
                (service.title === "Spare Parts Support" || service.title === "Aircraft Management" ? "ring-2 ring-skyblue/60" : "")
              }
            >
              <CardContent className="p-8 flex flex-col items-center text-center min-h-[370px] justify-between">
                <div className="rounded-full bg-cloud-light p-6 mb-5 group-hover:bg-skyblue/10 transition-colors drop-shadow-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-blue font-playfair mb-4">{service.title}</h3>
                <div className="text-gray-700 text-left w-full text-base font-sans">
                  {service.description}
                </div>
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
